package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.dto.AuthDto;
import com.example.soma.service.UserAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class AuthenticationController {

    @Autowired
    private UserAuthenticationService authenticationService;

    @PostMapping("/")
    public ResponseEntity<Response> authenticateUser(@RequestBody AuthDto userData){
        return new ResponseEntity<>(authenticationService.authenticateUser(userData), HttpStatus.OK);
    }
}
