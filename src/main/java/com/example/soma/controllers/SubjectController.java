package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.entity.Subject;
import com.example.soma.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/module")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @PostMapping("/create")
    public ResponseEntity<Response> createModule(@RequestBody Subject subject){
        return new ResponseEntity<>(subjectService.createModule(subject), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAllModules(){
        return new ResponseEntity<>(subjectService.getAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getById(@RequestParam("id") long id){
        return new ResponseEntity<>(subjectService.getNoduleById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Response> updateModule(@RequestBody Subject subject, @RequestParam("id") long id){
        return new ResponseEntity<>(subjectService.updateModule(subject, id), HttpStatus.OK);
    }

    public ResponseEntity<Response> deleteModule(@RequestParam("id") long id){
        return new ResponseEntity<>(subjectService.deleteModule(id), HttpStatus.OK);
    }
}
