package com.example.soma.dto;

import com.example.soma.entity.Role;
import lombok.Data;

import java.util.List;

@Data
public class UserDto {
    private long id;
    private String username;
    private String email;
    private String password;
    private String lastLoginDate;
    private String status;
    private String updatedAt;
    private String updatedBy;
    private List<Role> roles;
}
