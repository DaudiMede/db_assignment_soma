package com.example.soma.dao;

import com.example.soma.entity.SubjectCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectCatDao extends JpaRepository<SubjectCategory, Long> {
}