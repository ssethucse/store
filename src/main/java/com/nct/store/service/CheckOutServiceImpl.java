package com.nct.store.service;

import com.nct.store.dao.CustomerRepository;
import com.nct.store.dao.OrderRepository;
import com.nct.store.dto.Purchase;
import com.nct.store.dto.PurchaseResponse;
import com.nct.store.entity.Customer;
import com.nct.store.entity.Order;
import com.nct.store.entity.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckOutServiceImpl implements CheckoutService{

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    UtilityService utilityService;
    @Autowired
    OrderRepository orderRepository;

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();
        String orderTrackingNumber = null;

        //generate Tracking Number
        Order orderId = orderRepository.findOrderId();
        if(orderId!=null) {
            orderTrackingNumber = orderId.getOrderTrackingNumber();
        }
        orderTrackingNumber = generateOrderTrackingNumber(orderTrackingNumber);

        order.setOrderTrackingNumber(orderTrackingNumber);

        //Get order items
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        //order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());

        Customer customer = purchase.getCustomer();

        String email = customer.getPhone();
        Customer customerFromDb = customerRepository.findByPhone(email);
        if(customerFromDb!=null && customerFromDb.getFirstName()==null){
            customerFromDb.setFirstName(customer.getFirstName());
        }
        if(customerFromDb!=null && customerFromDb.getLastName()==null){
            customerFromDb.setLastName(customer.getLastName());
        }
        if(customerFromDb!=null && customerFromDb.getEmail()==null){
            customerFromDb.setEmail(customer.getEmail());
        }
        if(customerFromDb!=null){
            customer = customerFromDb;
        }
        customer.add(order);


        //customer.setIdentity(passwordEncoder.encode(purchase.getCustomer().getIdentity()));

        Customer save = customerRepository.save(customer);

        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber(String id) {
        //return UUID.randomUUID().toString();
        return utilityService.getNextId(id);
    }
}
