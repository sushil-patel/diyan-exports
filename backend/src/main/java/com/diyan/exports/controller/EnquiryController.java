package com.diyan.exports.controller;

import com.diyan.exports.dto.EnquiryRequest;
import com.diyan.exports.model.Enquiry;
import com.diyan.exports.service.EnquiryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "${app.cors.allowed-origins}")
public class EnquiryController {

    private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping
    public ResponseEntity<Enquiry> submitEnquiry(@Valid @RequestBody EnquiryRequest request) {
        Enquiry enquiry = new Enquiry();
        enquiry.setName(request.getName());
        enquiry.setAddress(request.getAddress());
        enquiry.setEmail(request.getEmail());
        enquiry.setTel(request.getTel());
        enquiry.setMessage(request.getMessage());
        
        Enquiry saved = enquiryService.saveEnquiry(enquiry);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
}
