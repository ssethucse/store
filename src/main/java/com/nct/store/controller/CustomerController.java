package com.nct.store.controller;

import com.nct.store.entity.Customer;
import com.nct.store.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin(value = "*")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/getAllCustomer")
    ResponseEntity<List<Customer>> getAllCustomer() {
        return new ResponseEntity<>(customerService.getAllCustomer(), HttpStatus.OK);
    }

    @PostMapping("/register")
    ResponseEntity<String> register(@RequestBody Customer customer) {
        return new ResponseEntity<>(customerService.register(customer), HttpStatus.OK);
    }

    @GetMapping("/getDetail")
    ResponseEntity<Customer> getDetail(@RequestParam(value = "phone") String username) {
        return new ResponseEntity<>(customerService.getDetails(username), HttpStatus.OK);
    }

    @PostMapping("/update")
    ResponseEntity<Customer> updateUsers(@RequestBody Customer users) {
        return new ResponseEntity<>(customerService.update(users), HttpStatus.OK);
    }
}

