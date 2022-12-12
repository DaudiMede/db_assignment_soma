package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class CourseCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    @Column(name = "COURSE_ID")
    private long courseId;
    @Column(name = "CATEGORY_ID")
    private long categoryId;
}
