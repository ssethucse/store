package com.nct.store.service;

import com.nct.store.dao.OrderRepository;
import com.nct.store.dao.ProductRepository;
import com.nct.store.dto.CustomerProfile;
import com.nct.store.dto.InvoiceResp;
import com.nct.store.dto.OrderResp;
import com.nct.store.entity.Order;
import com.nct.store.entity.OrderItem;
import com.nct.store.entity.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
public class OrderService {
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    MessageSenderService messageSenderService;

    public List<Order> findByCustomerPhone(String email, Integer page, Integer pageSize) {

        /*Pageable paging = PageRequest.of(page, pageSize);
        Page<Order> custAll = orderRepository.findCustAll(email, paging);
        return custAll;*/

        List<Order> customer = orderRepository.findCustomer(email);
        return customer;
    }

    public CustomerProfile findCustomer(String phone) {
        CustomerProfile customerProfile = new CustomerProfile();
        List<Order> customer = orderRepository.findCustomer(phone);
        if (customer.size() > 0) {
            customerProfile.setShippingAddress(customer.get(0).getShippingAddress());
            customerProfile.setCustomer(customer.get(0).getCustomer());
            return customerProfile;
        }
        return null;
    }

    public String updateOrderStatus(String orderStatus) {
        Order customer = orderRepository.findOrderByTrack(orderStatus);
        if (customer != null) {
            if(customer.getStatus()!=null && customer.getStatus().equalsIgnoreCase("Delivered")){
                customer.setStatus("In-Progress");
            }else {
                try {
                    String message = messageSenderService.updateOrder(customer.getCustomer().getPhone());
                    log.info("Placed Order Successfully: {}",message);
                } catch (Exception e) {
                    log.error("Place Order Failed {}",e.getMessage());
                }
                customer.setStatus("Delivered");
            }
            orderRepository.save(customer);
            return "Success";
        }
        return null;
    }

    public List<Order> findMonthOrders() {
        return orderRepository.findMonthOrders();
    }

    public List<OrderResp> findAllOrders() {
        return orderRepository.findAll().stream()
                .filter(data->data.getStatus().equalsIgnoreCase("In-Progress"))
                .sorted(Comparator.comparing(Order::getDateCreated).reversed())
                .map(data->mapOrder(data))
                .collect(Collectors.toList());
    }

    private OrderResp mapOrder(Order data) {
        OrderResp orderResp = new OrderResp();
        orderResp.setPhone(data.getCustomer().getPhone());
        orderResp.setOrderTrackingNumber(data.getOrderTrackingNumber());
        orderResp.setDateCreated(data.getDateCreated());
        orderResp.setId(data.getId());
        orderResp.setStatus(data.getStatus());
        orderResp.setTotalPrice(data.getTotalPrice());
        orderResp.setTotalQuantity(data.getTotalQuantity());
        return orderResp;
    }

    public List<InvoiceResp> invoiceStatus(String invoice) {
        Map<Long,String> prod = new HashMap<>();
        List<Product> products = productRepository.findAll();
        for(Product pro:products){
            prod.put(pro.getId(),pro.getName());
        }

        Order customer = orderRepository.findOrderByOrderTrackingNumber(invoice);
        InvoiceResp invoiceResp;
        List<InvoiceResp> invoiceResps = new ArrayList<>();
        if (customer != null) {
            for(OrderItem orderItem: customer.getOrderItems()) {
                invoiceResp = new InvoiceResp();
                invoiceResp.setLocation(customer.getShippingAddress().getCity());
                invoiceResp.setStreet(customer.getShippingAddress().getStreet());
                invoiceResp.setZip(customer.getShippingAddress().getZipCode());
                invoiceResp.setName(prod.get(orderItem.getId()));
                invoiceResp.setPrice(orderItem.getUnitPrice());
                invoiceResp.setQuantity(orderItem.getQuantity());
                invoiceResps.add(invoiceResp);
            }
            return invoiceResps;
        }
        return null;
    }
}
