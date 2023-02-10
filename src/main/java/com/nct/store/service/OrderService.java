package com.nct.store.service;

import com.nct.store.dao.OrderRepository;
import com.nct.store.dto.CustomerProfile;
import com.nct.store.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
