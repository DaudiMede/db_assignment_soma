package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.dto.StaffDto;
import com.example.soma.entity.Staff;
import com.example.soma.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/staff")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class StaffController {
    @Autowired
    private StaffService staffService;

    @PostMapping("/create")
    public ResponseEntity<Response> createStaff(@RequestBody StaffDto staff){
        return new ResponseEntity<>(staffService.createStaff(staff), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAllStaff(){
        return new ResponseEntity<>(staffService.getAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getById(@RequestParam("id") long id){
        return new ResponseEntity<>(staffService.getStaffById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Response> updateStaff(@RequestBody Staff staff,@RequestParam("id") long id){
        return new ResponseEntity<>(staffService.updateStaff(staff, id), HttpStatus.OK);
    }

    public ResponseEntity<Response> deleteStaff(@RequestParam("id") long id){
        return new ResponseEntity<>(staffService.deleteStaff(id), HttpStatus.OK);
    }
}
