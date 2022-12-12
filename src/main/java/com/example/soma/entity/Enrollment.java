package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ENROLLMENT_ID")
    private long id;
    @Column(name = "STUDENT_ID")
    private long studentId;
    @Column(name = "ENROLLMENT_CATEGORY")
    private long enrollmentCategory;
    @Column(name = "YEAR")
    private String year;
}
