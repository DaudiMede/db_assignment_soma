package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MODULE_ID")
    private long id;
    @Column(name = "MODULE_NAME")
    private String moduleName;
    @Column(name = "MODULE_CODE")
    private String moduleCode;
    @Column(name = "DEPARTMENT_ID")
    private long departmentId;
    @Column(name = "MODULE_NUMBER")
    private long moduleNumber;
    @Column(name = "SEMESTER_TAUGHT")
    private String semester;
    @Column(name = "SUBJECT_CATEGORY")
    private String subjectCategory;
    @Column(name = "NTA_LEVEL")
    private long ntaLevel;
    @Column(name = "CREDITS")
    private long credits;
    @Column(name = "STATUS")
    private String status;
}
