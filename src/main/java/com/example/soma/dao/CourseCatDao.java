package com.example.soma.dao;

import com.example.soma.entity.CourseCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseCatDao extends JpaRepository<CourseCategory, Long> {
}
