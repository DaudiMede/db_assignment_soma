package com.example.soma.dao;

import com.example.soma.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleDAO extends JpaRepository<Role, Long> {
    Role findByRoleName(String roleName);
    boolean existByRoleName(String roleName);
}
