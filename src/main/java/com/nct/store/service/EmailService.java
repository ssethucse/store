package com.nct.store.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;

@Service
@Slf4j
public class EmailService {
    public String sendMail(String to, String message) {
        try {
            Properties props = new Properties();
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.port", "587");

            Session session = Session.getInstance(props, new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication("nctmegastore@gmail.com", "xhhwzojwiqyivulw");
                }
            });
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress("nctmegastore@gmail.com", false));

            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            msg.setSubject("Order Update");
            msg.setContent( message, "text/html");
            msg.setSentDate(new Date());
            Transport.send(msg);
            return "Mail Sent Successfully";
        } catch (MessagingException e) {
            log.error("Error wile sending email: {}",e.getMessage());
            return "Mail Failed";
        }
    }
}
