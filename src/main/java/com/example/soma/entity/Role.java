package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ROLE_ID")
    private long id;
    @Column(name = "ROLE_NAME")
    private String roleName;
    @Column(name = "STATUS")
    private String status;
}
