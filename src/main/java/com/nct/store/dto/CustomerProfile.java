package com.nct.store.dto;

import com.nct.store.entity.Address;
import com.nct.store.entity.Customer;
import lombok.Data;

@Data
public class CustomerProfile {
    private Customer customer;
    private Address shippingAddress;
}
