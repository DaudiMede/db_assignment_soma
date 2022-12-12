package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.dao.CourseDao;
import com.example.soma.entity.Course;
import com.example.soma.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/course")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PostMapping("/create")
    public ResponseEntity<Response> createCourse(@RequestBody Course course){
        return new ResponseEntity<>(courseService.createCourse(course), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAllCourse(){
        return new ResponseEntity<>(courseService.getAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getById(@RequestParam("id") long id){
        return new ResponseEntity<>(courseService.getById(id), HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Response> updateCourse(@RequestParam("id") long id, @RequestBody Course course){
        return new ResponseEntity<>(courseService.updateCourse(course, id), HttpStatus.OK);
    }

    public ResponseEntity<Response> deleteCourse(@RequestParam("id") long id){
        return new ResponseEntity<>(courseService.deleteCourse(id), HttpStatus.OK);
    }
}
