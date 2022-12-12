package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.RoleDao;
import com.example.soma.dao.UserDao;
import com.example.soma.dao.UserRoleDao;
import com.example.soma.entity.Role;
import com.example.soma.entity.User;
import com.example.soma.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserRoleService {
    private Response response = new Response();
    @Autowired
    private UserRoleDao userRoleDao;

    @Autowired
    private UserDao userDao;

    private UserRole userRole = new UserRole();

    public Response assignRole(User user, long roleId){
        Optional<User> userData = userDao.findByUsername(user.getUsername());
        if(userData.isPresent()){
            userRole.setRoleId(roleId);
            userRole.setUserId(userData.get().getId());
            userRoleDao.save(userRole);

            return response.successResponse(userRole);
        }
        else {
            return response.failedResponse("Failed to Set role");
        }
    }
}
