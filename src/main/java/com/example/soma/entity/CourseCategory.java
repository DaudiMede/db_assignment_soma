package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class CourseCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseCategoryId;
    @OneToOne
    @JoinColumn(
            name = "COURSE_ID",
            referencedColumnName = "courseId"
    )
    private Course course;
    @OneToOne
    @JoinColumn(
            name = "CATEGORY_ID",
            referencedColumnName = "categoryId"
    )
    private Category category;
}