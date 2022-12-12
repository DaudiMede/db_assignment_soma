package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.dto.StudentDto;
import com.example.soma.entity.Student;
import com.example.soma.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/create")
    public ResponseEntity<Response> createStudent(@RequestBody StudentDto student){
        return new ResponseEntity<>(studentService.createStudent(student), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAllStudents(){
        return new ResponseEntity<>(studentService.getAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getStudentById(@RequestParam("id") long id){
        return new ResponseEntity<>(studentService.getStudentById(id), HttpStatus.OK);
    }

    @GetMapping("/applicant")
    public ResponseEntity<Response> getApplicants(){
        return new ResponseEntity<>(studentService.getApplicants(), HttpStatus.OK);
    }

    @PostMapping("/create/{id}")
    public ResponseEntity<Response> updateStudent(@RequestParam("id") long id, @RequestBody Student student){
        return new ResponseEntity<>(studentService.updateStudent(student, id), HttpStatus.OK);
    }

    public ResponseEntity<Response> deleteStudent(@RequestParam("id") long id){
        return new ResponseEntity<>(studentService.deleteStudent(id), HttpStatus.OK);
    }
}
