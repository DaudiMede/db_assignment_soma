package com.example.soma.dao;

import com.example.soma.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentDao extends JpaRepository<Student, Long> {
    List<Student> findAllByStatus(String status);
}
