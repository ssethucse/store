package com.nct.store.service;

import com.nct.store.dao.CustomerRepository;
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

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();

        //generate Tracking Number
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        //Get order items
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());

        Customer customer = purchase.getCustomer();

        String email = customer.getEmail();
        Customer customerFromDb = customerRepository.findByEmail(email);
        if(customerFromDb!=null){
            customer = customerFromDb;
        }

        customer.add(order);


        customer.setIdentity(passwordEncoder.encode(purchase.getCustomer().getIdentity()));

        Customer save = customerRepository.save(customer);

        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
