package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class StaffRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffRoleId;
    @ManyToOne
    @JoinColumn(
            name = "STAFF_ID",
            referencedColumnName = "staffId"
    )
    private Staff staff;
    @ManyToOne
    @JoinColumn(
            name = "ROLE_ID",
            referencedColumnName = "roleId"
    )
    private Role role;
}
