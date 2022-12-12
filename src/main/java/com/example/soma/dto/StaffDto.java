package com.example.soma.dto;

import com.example.soma.entity.Department;
import com.example.soma.entity.Subject;
import lombok.Data;

import java.util.List;

@Data

public class StaffDto {
    private long id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String gender;
    private String phoneNumber;
    private String email;
    private long departmentId;
    private String status;
    private long roleId;
    private Department department;
    private List<Subject> subjects;
}
