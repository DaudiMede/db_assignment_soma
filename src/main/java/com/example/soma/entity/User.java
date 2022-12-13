package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "User", uniqueConstraints = {
        @UniqueConstraint(name = "uc_user_username_email", columnNames = {"USERNAME", "EMAIL"})
})
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private long id;
    @Column(name = "USERNAME")
    private String username;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "LAST_LOGIN_DATE")
    private String lastLoginDate;
    @Column(name = "STATUS")
    private String status;
    @Column(name = "UPDATED_AT")
    private String updatedAt;
    @Column(name = "UPDATED_BY")
    private String updatedBy;
}
