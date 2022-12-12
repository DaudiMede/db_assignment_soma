package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.entity.ProgramClass;
import com.example.soma.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/class")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class ProgramClassController {
    @Autowired
    private ClassService classService;

    @PostMapping("/create")
    public ResponseEntity<Response> createClass(@RequestBody ProgramClass programClass){
        return new ResponseEntity<>(classService.createClass(programClass), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAllClasses(){
        return new ResponseEntity<>(classService.getAllClasses(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getClassById(@RequestParam("id") long id){
        return new ResponseEntity<>(classService.getClassById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Response> updateClass(@RequestParam("id") long id, @RequestBody ProgramClass programClass){
        return new ResponseEntity<>(classService.updateClass(programClass, id), HttpStatus.OK);
    }
}
