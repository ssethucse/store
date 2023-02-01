package com.nct.store.dto;

import com.nct.store.entity.Address;
import com.nct.store.entity.Customer;
import com.nct.store.entity.Order;
import com.nct.store.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
