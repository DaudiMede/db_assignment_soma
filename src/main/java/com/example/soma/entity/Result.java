package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private double continuousAssessment;
    private double finalExamination;
    private String year;
    private String status;
    @ManyToOne
    @JoinColumn(
            name = "MODULE_CODE",
            referencedColumnName = "moduleCode"
    )
    private Module module;
    @ManyToOne
    @JoinColumn(
            name = "STUDENT_REGISTRATION_NUMBER",
            referencedColumnName = "registrationNumber"
    )
    private Student student;
}
