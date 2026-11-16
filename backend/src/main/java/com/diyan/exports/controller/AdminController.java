package com.diyan.exports.controller;

import com.diyan.exports.model.Enquiry;
import com.diyan.exports.repositories.EnquiryRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "${app.cors.allowed-origins}")
public class AdminController {

    private final EnquiryRepository enquiryRepository;

    public AdminController(EnquiryRepository enquiryRepository) {
        this.enquiryRepository = enquiryRepository;
    }

    @GetMapping("/enquiries")
    public ResponseEntity<List<Enquiry>> getEnquiries() {
        return ResponseEntity.ok(enquiryRepository.findAll());
    }

}
