package com.example.soma.controllers;

import com.example.soma.api.Response;
import com.example.soma.entity.NtaLevel;
import com.example.soma.service.NTAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/nta-level")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
public class NtaLevelController {
    @Autowired
    private NTAService ntaService;

    @PostMapping("/create")
    public ResponseEntity<Response> createAward(@RequestBody NtaLevel ntaLevel){
        return new ResponseEntity<>(ntaService.createNTA(ntaLevel), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Response> getAllLevels(){
        return new ResponseEntity<>(ntaService.getAllLevels(), HttpStatus.OK);
    }
}
