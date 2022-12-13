package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Staff", uniqueConstraints = {
        @UniqueConstraint(name = "uc_staff_email_phone_number", columnNames = {"EMAIL", "PHONE_NUMBER"})
})
@Data
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "STAFF_ID")
    private long id;
    @Column(name = "FIRST_NAME")
    private String firstName;
    @Column(name = "MIDDLE_NAME")
    private String middleName;
    @Column(name = "LAST_NAME")
    private String lastName;
    @Column(name = "GENDER")
    private String gender;
    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "DEPARTMENT_ID")
    private long departmentId;
    @Column(name = "STATUS")
    private String status;
}
