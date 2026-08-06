package com.diyan.exports.repositories;


import com.diyan.exports.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findBySlug(String slug);
    List<Product> findByCategoryId(Long id);
    List<Product> findByCategorySlug(String categorySlug);
}
