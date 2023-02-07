package com.nct.store.service;

import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;

@Service
public class UtilityService {

    public Integer getSid(Integer sid) {
        if (sid != null && sid >= 9999999) {
            return 1;
        } else if (sid != null) {
            return (sid + 1);
        } else {
            return null;
        }
    }

    public String getNextId(String orderID) {
        if (orderID != null && Integer.valueOf(orderID) >= 999) {
            String order = String.format("%07d", 1);
            return order;
        } else if (orderID != null) {
            String order = String.format("%07d", Integer.valueOf(orderID) + 1);
            return order;
        } else {
            return null;
        }
    }


    public Timestamp getInstantTime() {
        return Timestamp.from(Instant.now());
    }
}
