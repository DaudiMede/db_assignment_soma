package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ROLE_ID")
    private long id;
    @Column(name = "ROLE_ID")
    private long roleId;
    @Column(name = "USER_ID")
    private long userId;
}
