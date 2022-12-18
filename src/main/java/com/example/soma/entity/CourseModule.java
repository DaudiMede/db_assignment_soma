package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class CourseModule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseModuleId;
    @ManyToOne
    @JoinColumn(
            name = "COURSE_CATEGORY_ID",
            referencedColumnName = "courseCategoryId"
    )
    private CourseCategory courseCategory;
    @ManyToOne
    @JoinColumn(
            name = "MODULE_ID",
            referencedColumnName = "moduleId"
    )
    private Module module;
    private String status;
}
