package com.example.soma.dao;

import com.example.soma.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffDao extends JpaRepository<Staff, Long> {
}
