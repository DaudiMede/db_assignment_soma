package com.example.soma.dao;

import com.example.soma.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultDao extends JpaRepository<Result, Long> {
}
