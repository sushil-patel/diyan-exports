package com.diyan.exports.controller;

import com.diyan.exports.model.Category;
import com.diyan.exports.model.CompanyInfo;
import com.diyan.exports.model.Product;
import com.diyan.exports.repositories.CompanyInfoRepository;
import com.diyan.exports.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "${app.cors.allowed-origins}") // CrossOrigin configured to allow origins dynamically from properties
public class PublicController {

    private final ProductService productService;
    private final CompanyInfoRepository companyInfoRepository;

    public PublicController(ProductService productService, CompanyInfoRepository companyInfoRepository) {
        this.productService = productService;
        this.companyInfoRepository = companyInfoRepository;
    }

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(productService.getAllCategories());
    }

    @GetMapping("/categories/{slug}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String slug) {
        return ResponseEntity.ok(productService.getProductsByCategory(slug));
    }

    @GetMapping("/products/{slug}")
    public ResponseEntity<Product> getProductBySlug(@PathVariable String slug) {
        return productService.getProductBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/company-info")
    public ResponseEntity<CompanyInfo> getCompanyInfo() {
        return companyInfoRepository.findAll().stream().findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
