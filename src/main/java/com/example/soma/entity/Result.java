package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RESULT_ID")
    private long id;
    @Column(name = "STUDENT_REG_NO")
    private long studentRegNo;
    @Column(name = "MODULE_CODE")
    private String moduleCode;
    @Column(name = "SEMESTER")
    private String Semester;
    @Column(name = "ACADEMIC_YEAR")
    private String academicYear;
    @Column(name = "CA")
    private double CA;
    @Column(name = "FE")
    private double FE;
    @Column(name = "STATUS")
    private String status;
}
