package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Department", uniqueConstraints = {
        @UniqueConstraint(name = "uc_department_dept_name", columnNames = {"DEPT_NAME"})
})
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
