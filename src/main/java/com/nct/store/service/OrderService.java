package com.nct.store.service;

import com.nct.store.dao.OrderRepository;
import com.nct.store.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    CustomerService customerService;

    public Page<Order> findByCustomerPhone(String email, Integer page, Integer pageSize) {

        Pageable paging = PageRequest.of(page, pageSize);
        Page<Order> custAll = orderRepository.findCustAll(email,paging);
        return custAll;
    }
}
