package com.nct.store.dto;

import lombok.Data;

@Data
public class MessageModel {
    private String phone;
    private String identity;
    private String text;
    private String otp;
    private String status;
    private String name;
}
