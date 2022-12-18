package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userRoleId;
    @ManyToOne
    @JoinColumn(
            name = "USER_ID",
            referencedColumnName = "userId"
    )
    private User user;
    @ManyToOne
    @JoinColumn(
            name = "ROLE_ID",
            referencedColumnName = "roleId"
    )
    private Role role;
}