package com.diyan.exports.model;

import com.diyan.exports.audit.Auditable;
import com.diyan.exports.model.converter.JsonStringMapConverter;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Entity
@Getter
@Setter
public class Product extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    @Column(name = "product_id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER) // EAGER is fine for MVP, LAZY can also be used if needed
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column
    private String botanicalName;

    @Column
    private String familyName;

    @Column
    private String commercialPart;

    @Column(columnDefinition = "TEXT")
    private String originAndDistribution;

    @Column(columnDefinition = "TEXT")
    private String uses;

    @Column
    private String imageUrl;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonStringMapConverter.class)
    private Map<String, String> specifications;
}
