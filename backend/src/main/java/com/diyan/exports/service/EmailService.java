package com.diyan.exports.service;

import com.diyan.exports.model.Enquiry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    public void sendEnquiryNotification(Enquiry enquiry) {
        logger.info("==================================================");
        logger.info("NEW ENQUIRY RECEIVED (MOCK EMAIL SYSTEM)");
        logger.info("To: inquiry@diyanexports.com");
        logger.info("From: {} <{}>", enquiry.getName(), enquiry.getEmail());
        logger.info("Tel: {}", enquiry.getTel());
        logger.info("Address: {}", enquiry.getAddress());
        logger.info("Message Details:");
        logger.info("--------------------------------------------------");
        logger.info(enquiry.getMessage());
        logger.info("==================================================");
    }
}