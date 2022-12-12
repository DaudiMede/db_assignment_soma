package com.example.soma.dao;

import com.example.soma.entity.NtaLevel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NTADao extends JpaRepository<NtaLevel, Long> {
}
