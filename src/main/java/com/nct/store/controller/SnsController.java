package com.nct.store.controller;

//@RestController
public class SnsController {
/*    private static final String TOPIC_ARN = "arn:aws:sns:us-east-1:965262714231:NCT";

    @Autowired
    AmazonSNSClient amazonSNSClient;*/
/*
    @GetMapping("/sendNotification")
    public String publishMessage() {
        PublishRequest publishRequest = new PublishRequest(TOPIC_ARN, "test", "NCT");
        amazonSNSClient.publish(publishRequest);
        return "Success";
    }*/

    /*@GetMapping("/subscribe/{phone}")
    public String subscribe(@PathVariable(value = "phone") String phone){
        SubscribeRequest subscribeRequest = new SubscribeRequest(TOPIC_ARN,"sms",phone);
        amazonSNSClient.subscribe(subscribeRequest);
        return "Success";
    }*/

 /*   @GetMapping("/publish/{message}")
    public String sendMessage(@PathVariable(value = "message") String message) {
        HashMap<String, MessageAttributeValue> attributes = new HashMap<>();
        attributes.put("AWS.SNS.SMS.SenderID", new MessageAttributeValue().withStringValue("mySenderID").withDataType("String"));
        //attributes.put("AWS.SNS.SMS.MaxPrice", new MessageAttributeValue().withStringValue("0.50").withDataType("Number"));
        attributes.put("AWS.SNS.SMS.SMSType", new MessageAttributeValue().withStringValue("Transactional").withDataType("String"));

        PublishRequest publishRequest = new PublishRequest();
        publishRequest.setMessage(message);
        //publishRequest.setTopicArn(TOPIC_ARN);
        //publishRequest.setPhoneNumber("+919944370922");
        publishRequest.setPhoneNumber("+918754084538");
        publishRequest.setMessageAttributes(attributes);
        amazonSNSClient.publish(publishRequest);
        return "Success";
    }*/
}
