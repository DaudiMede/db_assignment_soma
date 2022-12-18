package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Student", uniqueConstraints = {
        @UniqueConstraint(name = "uc_student_registrationnumber", columnNames = {"registrationNumber"})
})

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String gender;
    private String email;
    private String phoneNumber;
    private String formFourIndexNumber;
    private String address;
    private String guardianName;
    private String guardianPhoneNumber;
    private String getGuardianEmail;
    private String registrationNumber;
    private String enrollmentStatus;
    @ManyToOne
    @JoinColumn(
            name = "PROGRAMME_ID",
            referencedColumnName = "programmeId"
    )
    private Programme programme;
}
