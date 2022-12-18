package com.example.soma.dao;

import com.example.soma.entity.NationalAward;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NationalAwardDAO extends JpaRepository<NationalAward, Long> {
}
