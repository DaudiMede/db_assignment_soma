package com.example.soma.dao;

import com.example.soma.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentDAO extends JpaRepository<Student, Long> {
    Student findByRegistrationNumber(String registrationNumber);
    List<Student> findAllByClassId(long classId);
}
