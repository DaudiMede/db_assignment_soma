package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class SemesterResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEM_RESULT_ID")
    private long id;
    @Column(name = "STUDENT_ID")
    private long studentId;
//    @Column(name = "SEMESTER")
//    private String semester;
//    @Column(name = "YEAR")
//    private String year;
//    @Column(name = "STATUS")
//    private String status;
//    @Column(name = "GPA")
//    private float gpa;
}
