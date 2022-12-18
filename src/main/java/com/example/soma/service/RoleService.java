package com.example.soma.service;

import com.example.soma.api.response.response.APIResponse;
import com.example.soma.dao.RoleDAO;
import com.example.soma.entity.Role;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class RoleService {

    private APIResponse apiResponse = new APIResponse();
    @Autowired
    private RoleDAO roleDAO;

    public APIResponse createRole(Role roleData){
        if(!roleDAO.existByRoleName(roleData.getRoleName())){
            roleDAO.save(roleData);
            return apiResponse.successResponse("Role Added Successfully !", roleData);
        }
        else {
            return apiResponse.failedResponse("Role already exists !");
        }
    }
}
