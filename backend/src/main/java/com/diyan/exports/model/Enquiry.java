package com.diyan.exports.model;

import com.diyan.exports.audit.Auditable;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
public class Enquiry extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    @Column(name = "enquiry_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String address;

    @Column(nullable = false)
    private String email;

    @Column
    private String tel;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String message;
}
