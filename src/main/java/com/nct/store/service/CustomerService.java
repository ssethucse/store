package com.nct.store.service;

import com.nct.store.dao.CustomerRepository;
import com.nct.store.entity.Customer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    public Customer getDetails(String phone){
        Customer customerFromDb = customerRepository.findByPhone(phone);
        return customerFromDb;
    }

    public String register(Customer users) {
        users.setFirstName(users.getFirstName());
        users.setPhone(users.getPhone());
        //users.setIdentity(passwordEncoder.encode(users.getIdentity()));
        customerRepository.save(users);
        return "Customer Registered Successfully!";
    }

    public Customer update(Customer user) {
        return customerRepository.save(user);
    }
}
