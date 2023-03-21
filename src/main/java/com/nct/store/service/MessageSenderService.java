package com.nct.store.service;

import com.nct.store.dto.MessageModel;
import com.nct.store.entity.Customer;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.Random;

@Service
@Slf4j
public class MessageSenderService {

    @Autowired
    CustomerService customerService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    private EmailService emailService;

    @Value("${accountSID}")
    private String accountSID;

    @Value("${accountAuthToken}")
    private String accountAuthToken;

    @Value("${twilloSenderNumber}")
    private String twilloSenderNumber;

    public MessageModel sendMessage(MessageModel request) {
        try {
            Twilio.init(accountSID, accountAuthToken);
            String otp = generateOtp();

            String smsText = "One Time password for verification-" + otp;
            String mobileNumber = "+91"+request.getPhone();
            request.setText(smsText);
            request.setOtp(otp);

            PhoneNumber recieverPhoneNumber = new PhoneNumber(mobileNumber);//TODO
            PhoneNumber senderTwilloPhoneNumber = new PhoneNumber(twilloSenderNumber);

            MessageCreator creator = com.twilio.rest.api.v2010.account.Message.creator(recieverPhoneNumber,
                    senderTwilloPhoneNumber, smsText);
            Message create = creator.create();
            Message.Status status = create.getStatus();
            request.setStatus(status.toString());

            Customer details = customerService.getDetails(request.getPhone());
            if (details != null && details.getId() != null) {
                /*if (request.getIdentity() != null) {
                    details.setIdentity(request.getIdentity());
                }*/
                details.setIdentity(null);
                details.setOtp(otp);
                customerService.update(details);
            } else {
                Customer customers = new Customer();
                customers.setOtp(otp);
                customers.setFirstName(request.getName());
                customers.setPhone(request.getPhone());
                //customers.setIdentity(request.getIdentity());
                customerService.register(customers);
            }
            return request;
        } catch (Exception e) {
            log.error("Error on Sending OTP: {}",e.getMessage());
            //e.printStackTrace();
            return null;
        }
    }

    private String generateOtp() {
        return new DecimalFormat("000000").format(new Random().nextInt(999999));
    }

    public MessageModel validateOtp(MessageModel messageRequest) {
        if (messageRequest.getOtp() != null && messageRequest.getPhone() != null) {
            Customer details = customerService.getDetails(messageRequest.getPhone());
            if (details !=null && details.getOtp()!=null
                    && messageRequest.getOtp().equalsIgnoreCase(details.getOtp())) {

                if (details.getFirstName() != null) {
                    messageRequest.setName(details.getFirstName());
                }
                if (details.getIdentity() == null) {
                    details.setIdentity(passwordEncoder.encode(messageRequest.getIdentity()));
                }


                /*if (messageRequest.getIdentity() != null &&
                        !passwordEncoder.matches(messageRequest.getIdentity(), details.getIdentity())) {
                    details.setIdentity(passwordEncoder.encode(messageRequest.getIdentity()));
                }*/
                details.setOtp(null);
                customerService.update(details);
                return messageRequest;
            }
        }
        return null;
    }

    public String placeOrder(String phone,String invoice) {
        try {
            Twilio.init(accountSID, accountAuthToken);

            String smsText = "Your Order "+ invoice +"is placed successfully.Contact For Enquiry - 9944370922.";
            String mobileNumber = "+91"+phone;

            try {
                emailService.sendMail("ssethucse@gmail.com",invoice+"-"+mobileNumber);
            } catch (Exception e) {
                log.error("Error while sending mail={}",e.getMessage());
            }

            PhoneNumber recieverPhoneNumber = new PhoneNumber(mobileNumber);//TODO
            PhoneNumber senderTwilloPhoneNumber = new PhoneNumber(twilloSenderNumber);

            MessageCreator creator = com.twilio.rest.api.v2010.account.Message.creator(recieverPhoneNumber,
                    senderTwilloPhoneNumber, smsText);
            Message create = creator.create();
            return "Placed Successfully.";

        } catch (Exception e) {
            return null;
        }
    }

    public String updateOrder(String phone) {
        try {
            Twilio.init(accountSID, accountAuthToken);

            String smsText = "Thanks For Your Order with NCT.It has Successfully Delivered.Contact For Enquiry - 9944370922.";
            String mobileNumber = "+91"+phone;

            try {
                emailService.sendMail("ssethucse@gmail.com",smsText+"-"+mobileNumber);
            } catch (Exception e) {
                log.error("Error while sending mail={}",e.getMessage());
            }

            PhoneNumber recieverPhoneNumber = new PhoneNumber(mobileNumber);//TODO
            PhoneNumber senderTwilloPhoneNumber = new PhoneNumber(twilloSenderNumber);

            MessageCreator creator = com.twilio.rest.api.v2010.account.Message.creator(recieverPhoneNumber,
                    senderTwilloPhoneNumber, smsText);
            Message create = creator.create();
            return "Delivered Successfully.";

        } catch (Exception e) {
            return null;
        }
    }
}
