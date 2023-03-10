package com.nct.store.controller;

import com.nct.store.dto.CustomerProfile;
import com.nct.store.dto.OrderResp;
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
@CrossOrigin(value = "*")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/findByCustomerPhone/{phone}")
    ResponseEntity<Page<Order>> findByCustomerEmail(@PathVariable String phone,
                                                    @RequestParam(defaultValue = "10", required = false)
                                                            Integer pageSize,
                                                    @RequestParam(defaultValue = "0", required = false)
                                                            Integer page) {
        Page<Order> byCustomerEmail = orderService.findByCustomerPhone(phone, page, pageSize);
        /*HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "http://localhost:4200");
        return ResponseEntity.ok().headers(responseHeaders).body(byCustomerEmail);*/
        return new ResponseEntity<>(byCustomerEmail, HttpStatus.OK);
    }

    @GetMapping("/findCustomerProfile")
    CustomerProfile findCustomerAddress(@RequestParam String phone) {
        return orderService.findCustomer(phone);
    }

    @GetMapping("/findMonthOrders")
    List<Order> findMonthOrders() {
        return orderService.findMonthOrders();
    }

    @GetMapping("/findAllOrders")
    List<OrderResp> findAllOrders() {
        return orderService.findAllOrders();
    }

    @PostMapping("/status/upgrade")
    String updateOrderStatus(@RequestBody String orderStatus) {
        return orderService.updateOrderStatus(orderStatus);
    }
}

