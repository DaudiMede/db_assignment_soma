package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.RoleDao;
import com.example.soma.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    private Response response = new Response();
    @Autowired
    private RoleDao roleDao;

    public Response createRole(Role role){
        roleDao.save(role);
        response.setResponseCode("0");
        response.setResponseStatus("Success");
        response.setResponseBody(role);

        return response;
    }

    public Response getRoleById(long roleId){
        Role role = roleDao.findById(roleId).orElse(null);
        if(role != null){
            response.setResponseCode("0");
            response.setResponseStatus("Success");
            response.setResponseBody(role);
        }
        else {
            response.setResponseCode("1");
            response.setResponseStatus("Failed");
            response.setResponseBody("Failed to get Role");
        }

        return response;
    }

    public Response getAll(){
        List<Role> roles = roleDao.findAll();
        response.setResponseCode("0");
        response.setResponseStatus("Success");
        response.setResponseBody(roles);

        return response;
    }

    public Response updateRole(Role newRole, long roleId){
        Role role = roleDao.findById(roleId).orElse(null);
        if(role != null){
            role.setRoleName(newRole.getRoleName());
            role.setStatus(newRole.getStatus());
            roleDao.save(role);
            response.setResponseCode("0");
            response.setResponseStatus("Success");
            response.setResponseBody(role);
        }
        else {
            response.setResponseCode("1");
            response.setResponseStatus("Failed");
            response.setResponseBody("Failed to update Role");
        }
        return response;
    }

    public Response deleteRole(long roleId){
        Role role = roleDao.findById(roleId).orElse(null);
        if(role != null){
            role.setStatus("DELETED");
            roleDao.save(role);
            return response.successResponse(role);
        }
        else {
            return response.failedResponse("Failed to delete Role");
        }
    }
}
