package com.nct.store.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class InvoiceResp {
    private String name;
    private int quantity;
    private BigDecimal price;
    private String street;
    private String location;
    private String zip;
}
