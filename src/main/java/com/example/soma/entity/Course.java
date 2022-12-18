package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;
    private String courseName;
    @ManyToOne
    @JoinColumn(
            name = "DEPARTMENT_ID",
            referencedColumnName = "departmentId"
    )
    private Department department;
    private String status;
}
