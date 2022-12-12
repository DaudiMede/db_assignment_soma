package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.entity.User;
import com.example.soma.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Response> createUser(@RequestBody User user){
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAll(){
        return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getById(@RequestParam("id") long id){
        return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
    }

    @PostMapping("/create/{id}")
    public ResponseEntity<Response> updateUser(@RequestBody User user, @RequestParam("id") long id){
        return new ResponseEntity<>(userService.updateUser(user, id), HttpStatus.OK);
    }

    public ResponseEntity<Response> deleteUser(@RequestParam("id") long id){
        return new ResponseEntity<>(userService.deleteUser(id), HttpStatus.OK);
    }
}
