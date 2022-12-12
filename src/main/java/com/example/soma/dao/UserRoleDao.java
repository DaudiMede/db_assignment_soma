package com.example.soma.dao;

import com.example.soma.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRoleDao extends JpaRepository<UserRole, Long> {
    UserRole findByUserId(long userId);
    List<UserRole> findAllByUserId(long userId);
}
