package com.diyan.exports.service;

import com.diyan.exports.model.Enquiry;
import com.diyan.exports.repositories.EnquiryRepository;
import org.springframework.stereotype.Service;

@Service
public class EnquiryService {

    private final EnquiryRepository enquiryRepository;
    private final EmailService emailService;

    public EnquiryService(EnquiryRepository enquiryRepository, EmailService emailService) {
        this.enquiryRepository = enquiryRepository;
        this.emailService = emailService;
    }

    public Enquiry saveEnquiry(Enquiry enquiry) {
        Enquiry savedEnquiry = enquiryRepository.save(enquiry);
        emailService.sendEnquiryNotification(savedEnquiry);
        return savedEnquiry;
    }
}