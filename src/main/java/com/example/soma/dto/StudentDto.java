package com.example.soma.dto;

import com.example.soma.entity.ProgramClass;
import lombok.Data;

@Data
public class StudentDto {
    private long id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String gender;
    private String email;
    private String phoneNumber;
    private String cseeIndexNo;
    private String disability;
    private String address;
    private String guardianContact;
    private String guardianName;
    private long classId;
    private String enrollmentStatus;
    private String status;
    private String regNo;
    private long roleId;
    private ProgramClass programClass;

}
