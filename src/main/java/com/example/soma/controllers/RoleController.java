package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.entity.Role;
import com.example.soma.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/role")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class RoleController {
    @Autowired
    private RoleService roleService;

    @PostMapping("/create")
    public ResponseEntity<Response> createRole(@RequestBody Role role){
        return new ResponseEntity<>(roleService.createRole(role), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAllRoles(){
        return new ResponseEntity<>(roleService.getAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getById(@RequestParam("id") long id){
        return new ResponseEntity<>(roleService.getRoleById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Response> updateRole(@RequestParam("id") long id, @RequestBody Role role){
        return new ResponseEntity<>(roleService.updateRole(role, id), HttpStatus.OK);
    }

    public ResponseEntity<Response> deleteRole(@RequestParam("id") long id){
        return new ResponseEntity<>(roleService.deleteRole(id), HttpStatus.OK);
    }
}
