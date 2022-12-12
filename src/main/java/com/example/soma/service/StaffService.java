package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.StaffDao;
import com.example.soma.dao.UserDao;
import com.example.soma.dto.StaffDto;
import com.example.soma.entity.Staff;
import com.example.soma.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class StaffService {
    private Response response = new Response();
    @Autowired
    private StaffDao staffDao;
    @Autowired
    private UserService userService;

    @Autowired
    private UserRoleService userRoleService;

    public Response createStaff(StaffDto staffData){
        Staff staff = new Staff();
        staff.setFirstName(staffData.getFirstName());
        staff.setMiddleName(staffData.getMiddleName());
        staff.setLastName(staffData.getLastName());
        staff.setGender(staffData.getGender());
        staff.setEmail(staffData.getEmail());
        staff.setPhoneNumber(staffData.getPhoneNumber());
        staff.setDepartmentId(staffData.getDepartmentId());

        staffDao.save(staff);
            User user = new User();
            user.setUsername(staff.getEmail());
            user.setPassword(staff.getEmail());
            user.setEmail(staff.getEmail());
            user.setStatus("ACTIVE");
            response = userService.createUser(user);
            if(Objects.equals(response.getResponseCode(), "0")){
                userRoleService.assignRole(user, staffData.getRoleId());
            }

        return response.successResponse(staff);
    }

    public Response getAll(){
        List<Staff> staffList = staffDao.findAll();
        return response.successResponse(staffList);
    }

    public Response getStaffById(long id){
        Staff staff = staffDao.findById(id).orElse(null);
        if(staff != null){
            return response.successResponse(staff);
        }
        else {
            return response.failedResponse("Failed to get Staff with Id "+ id);
        }
    }

    public Response updateStaff(Staff staffData, long id){
        Staff staff = staffDao.findById(id).orElse(null);
        if(staff != null){
            staff.setDepartmentId(staffData.getDepartmentId());
            staff.setFirstName(staffData.getFirstName());
            staff.setMiddleName(staffData.getMiddleName());
            staff.setLastName(staffData.getLastName());
            staff.setPhoneNumber(staffData.getPhoneNumber());
            staff.setGender(staffData.getGender());
            staffDao.save(staff);
            return response.successResponse(staff);
        }
        else {
            return response.failedResponse("Failed to update Staff");
        }
    }

    public Response deleteStaff(long id){
        Staff staff = staffDao.findById(id).orElse(null);
        if(staff != null){
            staff.setStatus("DELETED");
            return response.successResponse(staff);
        }
        else {
            return response.failedResponse("Failed to delete Staff");
        }
    }
}
