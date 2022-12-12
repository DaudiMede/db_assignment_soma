package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.entity.Result;
import com.example.soma.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/result")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1"})
public class ResultController {
    @Autowired
    private ResultService resultService;

    public ResponseEntity<Response> uploadResults(@RequestBody List<Result> results){
        return new ResponseEntity<>(resultService.uploadCAResult(results), HttpStatus.OK);
    }
}
