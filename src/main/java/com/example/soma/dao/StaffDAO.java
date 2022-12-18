package com.example.soma.dao;

import com.example.soma.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StaffDAO extends JpaRepository<Staff, Long> {
    List<Staff> findAllByDepartmentId(long departmentId);
}
