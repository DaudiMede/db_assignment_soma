package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ClassSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MODULE_ID")
    private long id;
    @Column(name = "CLASS_ID")
    private long classId;
    @Column(name = "LECTURER_ID")
    private long lecturerId;
    @Column(name = "YEAR")
    private String year;
    @Column(name = "MODULE_CODE")
    private long moduleCode;
}
