package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.RoleDao;
import com.example.soma.dao.UserDao;
import com.example.soma.dao.UserRoleDao;
import com.example.soma.dto.AuthDto;
import com.example.soma.dto.UserDto;
import com.example.soma.entity.Role;
import com.example.soma.entity.User;
import com.example.soma.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserAuthenticationService {
    private Response response = new Response();
    @Autowired
    private UserDao userDao;

    @Autowired
    private UserRoleDao userRoleDao;

    @Autowired
    private RoleDao roleDao;

    public Response authenticateUser(AuthDto authData){
        UserDto userData = new UserDto();
        Optional<User> user = userDao.findByUsername(authData.getUsername());
        if(user.isPresent() && Objects.equals(user.get().getPassword(), authData.getPassword())){
//            UserRole userRole = userRoleDao.findByUserId(user.get().getId());
            List<UserRole> userRoles = userRoleDao.findAllByUserId(user.get().getId());
            if(!userRoles.isEmpty()){
//                Role role = roleDao.findById(userRole.getRoleId()).orElse(null);
                ArrayList<Role> roles = new ArrayList<>();
                for (UserRole userRole:userRoles) {
                    roleDao.findById(userRole.getRoleId()).ifPresent(roles::add);
                }

                if(!roles.isEmpty()){
                    userData.setId(user.get().getId());
                    userData.setUsername(user.get().getUsername());
                    userData.setEmail(user.get().getEmail());
                    userData.setStatus(user.get().getStatus());
                    userData.setRoles(roles);

                    return response.successResponse(userData);
                }
                else {
                    return response.failedResponse("role query Failed");
                }
            }
            else {
                return response.failedResponse("User Role Query Failed");
            }
        }
        else {
            return response.failedResponse("User not present");
        }
    }
}
