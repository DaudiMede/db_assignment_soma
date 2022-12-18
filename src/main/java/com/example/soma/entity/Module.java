package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
@Table(
        name = "Module", uniqueConstraints = {
                @UniqueConstraint(name = "uc_module_modulecode", columnNames = {"moduleCode"})
})
public class Module {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long moduleId;
    private String moduleTitle;
    private String moduleCode;
    private String programCode;
    private String status;
    private int credits;
    private int moduleNumber;
    @ManyToOne
    @JoinColumn(
            name = "DEPARTMENT_ID",
            referencedColumnName = "departmentId"
    )
    private Department department;
}
