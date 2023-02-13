package com.nct.store.service;

import com.nct.store.dao.OrderRepository;
import com.nct.store.dto.CustomerProfile;
import com.nct.store.dto.OrderResp;
import com.nct.store.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public Page<Order> findByCustomerPhone(String email, Integer page, Integer pageSize) {

        Pageable paging = PageRequest.of(page, pageSize);
        Page<Order> custAll = orderRepository.findCustAll(email, paging);
        return custAll;
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
}
