package com.example.soma.entity;

import jakarta.persistence.*;
import jdk.jfr.Category;
import lombok.Data;

@Entity
@Table(name = "Course", uniqueConstraints = {
        @UniqueConstraint(name = "uc_course_course_name", columnNames = {"COURSE_NAME"})
})

@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COURSE_ID")
    private long id;
    @Column(name = "COURSE_NAME")
    private String courseName;
    @Column(name = "DEPARTMENT_ID")
    private long department;
    @Column(name = "STATUS")
    private String status;
}
