package com.example.soma.dao;

import com.example.soma.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentDAO extends JpaRepository<Department, Long> {
}
