package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.ClassSubjectDao;
import com.example.soma.entity.ClassSubject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassSubjectService {
    private Response response;
    @Autowired
    private ClassSubjectDao classSubjectDao;

    public Response getAllClassSubject(long classId){
//        List<ClassSubject> classSubjects = classSubjectDao.fin

        return response;
    }
}
