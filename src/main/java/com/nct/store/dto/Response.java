package com.nct.store.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Response {
    private Object data;
    private String status;
    private Integer status_code;
    private String message;
    private Integer error_code;
}
