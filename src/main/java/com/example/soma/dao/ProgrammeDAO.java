package com.example.soma.dao;

import com.example.soma.entity.Programme;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgrammeDAO extends JpaRepository<Programme, Long> {
}
