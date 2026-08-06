package com.diyan.exports.model;

import com.diyan.exports.audit.Auditable;
import com.diyan.exports.model.converter.JsonStringListConverter;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter
@Setter
public class CompanyInfo extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    @Column(name = "company_info_id")
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String registeredOfficeAddress;

    @Column(columnDefinition = "TEXT")
    private String headOfficeAddress;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonStringListConverter.class)
    private List<String> contactNumbers;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonStringListConverter.class)
    private List<String> emails;

    @Column
    private String website;
}