package com.example.soma.dao;

import com.example.soma.entity.EnrollmentCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollmentCatDao extends JpaRepository<EnrollmentCategory, Long> {
}
