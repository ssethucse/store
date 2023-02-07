package com.nct.store.controller;

import com.nct.store.dao.OrderRepository;
import com.nct.store.entity.Order;
import com.nct.store.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(value = "*")
public class OrderController {

    @Autowired
    OrderService orderService;
    @Autowired
    OrderRepository orderRepository;

    @GetMapping("/findByCustomerPhone/{phone}")
    ResponseEntity<Page<Order>> findByCustomerEmail(@PathVariable String phone,
                                                    @RequestParam(defaultValue = "10", required = false)
                                                            Integer pageSize,
                                                    @RequestParam(defaultValue = "0", required = false)
                                                            Integer page) {
        Page<Order> byCustomerEmail = orderService.findByCustomerPhone(phone, page, pageSize);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "http://localhost:4200");
        return new ResponseEntity<>(byCustomerEmail, responseHeaders, HttpStatus.OK);
    }
}

