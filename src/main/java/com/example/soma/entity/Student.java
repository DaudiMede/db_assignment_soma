package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "STUDENT_ID")
    private long id;
    @Column(name = "FIRST_NAME")
    private String firstName;
    @Column(name = "MIDDLE_NAME")
    private String middleName;
    @Column(name = "LAST_NAME")
    private String lastName;
    @Column(name = "GENDER")
    private String gender;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;
    @Column(name = "CSEE_INDEX_NO")
    private String cseeIndexNo;
    @Column(name = "DISABILITY")
    private String disability;
    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "GUARDIAN_CONTACTS")
    private String guardianContact;
    @Column(name = "GUARDIAN_NAME")
    private String guardianName;
    @Column(name = "CLASS_ID")
    private long classId;
    @Column(name = "ENROLLMENT_STATUS")
    private String enrollmentStatus;
    @Column(name = "STATUS")
    private String status;
    @Column(name = "REG_NO")
    private String regNo;
}
