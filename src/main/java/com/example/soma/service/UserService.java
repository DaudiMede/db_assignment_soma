package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.UserDao;
import com.example.soma.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private Response response = new Response();

    @Autowired
    private UserDao userDao;

    public Response createUser(User user){
        userDao.save(user);
        return response.successResponse(user);
    }

    public Response getUserById(long userId){
        User user = userDao.findById(userId).orElse(null);
        if(user != null){
            return response.successResponse(user);
        }
        else {
            return response.failedResponse("Failed to get User");
        }
    }

    public Response getAll(){
        List<User> userList = userDao.findAll();

        return response.successResponse(userList);
    }

    public Response updateUser(User newUser, long userId){
        User user = userDao.findById(userId).orElse(null);
        if(user != null){
            user.setUsername(newUser.getUsername());
            user.setEmail(newUser.getEmail());
            user.setUpdatedBy(user.getUpdatedBy());

            userDao.save(user);
            return response.successResponse(user);
        }
        else {
            return response.failedResponse("Failed to Update User");
        }
    }

    public Response deleteUser(long userId){
        User user = userDao.findById(userId).orElse(null);
        if(user != null){
            user.setStatus("DELETED");
            return response.successResponse(user);
        }
        else {
            return response.failedResponse("Failed to Delete User");
        }
    }
}
