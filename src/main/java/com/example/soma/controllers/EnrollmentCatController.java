package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.entity.EnrollmentCategory;
import com.example.soma.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/category")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class EnrollmentCatController {
    @Autowired
    private EnrollmentService enrollmentService;

    @PostMapping("/create")
    public ResponseEntity<Response> createEnrollmentCat(@RequestBody EnrollmentCategory enrollmentCategory){
        return new ResponseEntity<>(enrollmentService.createEnrollmentCat(enrollmentCategory), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAllCats(){
        return new ResponseEntity<>(enrollmentService.getAllEnrollmentCat(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getById(@RequestParam("id") long id){
        return new ResponseEntity<>(enrollmentService.getEnrollmentCatById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Response> updateEnrollmentCat(@RequestBody EnrollmentCategory enrollmentCategory, @RequestParam("id") long id){
        return new ResponseEntity<>(enrollmentService.updateEnrollmentCat(enrollmentCategory, id), HttpStatus.OK);
    }

    public ResponseEntity<Response> deleteEnrollmentCat(@RequestParam("id") long id){
        return new ResponseEntity<>(enrollmentService.deleteEnrollmentCategory(id), HttpStatus.OK);
    }
}
