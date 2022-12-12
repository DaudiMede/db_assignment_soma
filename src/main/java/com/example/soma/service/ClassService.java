package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.ProgramClassDao;
import com.example.soma.entity.ProgramClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassService {
    private Response response = new Response();
    @Autowired
    private ProgramClassDao programClassDao;

    public Response createClass(ProgramClass programClass){
        programClassDao.save(programClass);

        return response.successResponse(programClass);
    }

    public Response getClassById(long classId){
        ProgramClass programClass = programClassDao.findById(classId).orElse(null);
        if(programClass != null){
           return response.successResponse(programClass);
        }
        else {return response.failedResponse("Failed to get Class");
        }
    }

    public Response getAllClasses(){
        List<ProgramClass> programClasses = programClassDao.findAll();
        response.setResponseCode("0");
        response.setResponseStatus("Success");
        response.setResponseBody(programClasses);

        return response;
    }

    public Response updateClass(ProgramClass newClass, long classId){
        ProgramClass programClass = programClassDao.findById(classId).orElse(null);
        if(programClass != null){
            programClass.setNtaLevel(newClass.getNtaLevel());
            programClass.setClassName(newClass.getClassName());
            programClassDao.save(programClass);

           return response.successResponse(programClass);
        }
        else {
            return response.failedResponse(null);
        }
    }

    public Response deleteClass(long classId){
        ProgramClass programClass = programClassDao.findById(classId).orElse(null);
        if(programClass != null){
            programClass.setStatus("DELETED");
            programClassDao.save(programClass);
            return response.successResponse(programClass);
        }
        else {
            return response.failedResponse("Failed to delete Class");
        }
    }

    public Response promoteClass(long classId){
        ProgramClass programClass = programClassDao.findById(classId).orElse(null);
        if(programClass != null){
            programClass.setNtaLevel(programClass.getNtaLevel() + 1);
            programClassDao.save(programClass);

           return response.successResponse(programClass);
        }
        else {
           return response.failedResponse("Failed to Promote Class");
        }
    }

}
