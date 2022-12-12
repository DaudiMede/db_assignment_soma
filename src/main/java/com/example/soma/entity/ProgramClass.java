package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProgramClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CLASS_ID")
    private long id;
    @Column(name = "CLASS_NAME")
    private String className;
    @Column(name = "COURSE_ID")
    private long courseId;
    @Column(name = "NTA_LEVEL")
    private long ntaLevel;
    @Column(name = "STARTING_YEAR")
    private String startingYear;
    @Column(name = "STATUS")
    private String status;
}
