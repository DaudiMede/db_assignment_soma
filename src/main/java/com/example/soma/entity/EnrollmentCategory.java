package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class EnrollmentCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "EN_CATEGORY_ID")
    private long id;
    @Column(name = "CATEGORY_NAME")
    private String categoryName;
    @Column(name = "SHORT_CODE")
    private String shortCode;
    @Column(name = "STATUS")
    private String status;
}
