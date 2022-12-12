package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DEPARTMENT_ID")
    private long id;
    @Column(name = "DEPT_NAME")
    private String departmentName;
    @Column(name = "HOD_ID")
    private long hodId;
    @Column(name = "STATUS")
    private String status;
}
