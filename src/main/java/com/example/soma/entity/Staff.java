package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String gender;
    private String address;
    private String email;
    private String phoneNumber;
    private String status;
    @ManyToOne
    @JoinColumn(
            name = "DEPARTMENT_ID",
            referencedColumnName = "departmentId"
    )
    private Department department;
}
