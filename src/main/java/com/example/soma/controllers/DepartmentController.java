package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.entity.Department;
import com.example.soma.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/department")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    @PostMapping("/create")
    public ResponseEntity<Response> createDept(@RequestBody Department department){
        return new ResponseEntity<>(departmentService.createDepartment(department), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAll(){
        return new ResponseEntity<>(departmentService.getAllDepartments(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getById(@RequestParam("id") long id){
        return new ResponseEntity<>(departmentService.getDepartmentById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Response> updateDept(@RequestParam("id") long id, @RequestBody Department department){
        return new ResponseEntity<>(departmentService.updateDepartment(department, id), HttpStatus.OK);
    }

    public ResponseEntity<Response> deleteDept(@RequestParam("id") long id){
        return new ResponseEntity<>(departmentService.deleteDepartment(id), HttpStatus.OK);
    }
}
