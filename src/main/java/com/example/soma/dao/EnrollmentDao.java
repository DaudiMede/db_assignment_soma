package com.example.soma.dao;

import com.example.soma.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollmentDao extends JpaRepository<Enrollment, Long> {
}
