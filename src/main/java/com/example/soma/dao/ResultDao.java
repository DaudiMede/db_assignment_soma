package com.example.soma.dao;

import com.example.soma.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultDao extends JpaRepository<Result, Long> {
    List<Result> findByAcademicYear(String academicYear);
    List<Result> findByModuleCode(String moduleCode);
    List<Result> findByStudentRegNo(String studentRegNo);
}
