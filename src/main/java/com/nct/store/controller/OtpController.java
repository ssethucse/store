package com.nct.store.controller;

import com.nct.store.dto.MessageModel;
import com.nct.store.dto.Response;
import com.nct.store.service.MessageSenderService;
import com.nct.store.service.UtilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mobile")
@CrossOrigin(value = "*")
public class OtpController {
    @Autowired
    private MessageSenderService service;
    @Autowired
    private UtilityService utilityService;

    @PostMapping("/sendOtp")
    public ResponseEntity<Response> sendSMS(@RequestBody MessageModel messageRequest) {
        MessageModel response = service.sendMessage(messageRequest);
        if (response != null) {
            return ResponseEntity.status(200).body(new Response(response, "SUCCESS"
                    , HttpStatus.OK.value(), "Successfully OTP Sent", null));
        }
        return ResponseEntity.status(500).body(new Response(null, "Failed"
                , HttpStatus.INTERNAL_SERVER_ERROR.value(), "Network Exception", 500));
    }

    @PostMapping("/validateOtp")
    public ResponseEntity<Response> validateOtp(@RequestBody MessageModel messageRequest) {
        MessageModel validateOtp = service.validateOtp(messageRequest);
        if (validateOtp != null) {
            return ResponseEntity.status(200).body(new Response(validateOtp, "SUCCESS"
                    , HttpStatus.OK.value(), "Successfully Validated OTP", null));
        }
        return ResponseEntity.status(500).body(new Response(null, "FAILURE"
                , HttpStatus.INTERNAL_SERVER_ERROR.value(), "Network Exception", 500));
    }
}
