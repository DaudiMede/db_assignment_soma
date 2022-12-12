package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.SubjectCatDao;
import com.example.soma.dao.SubjectDao;
import com.example.soma.entity.Subject;
import com.example.soma.entity.SubjectCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {
    private Response response = new Response();
    @Autowired
    private SubjectDao subjectDao;
    @Autowired
    private SubjectCatDao subjectCatDao;

    public Response createModule(Subject subject){
        subjectDao.save(subject);
        return response.successResponse(subject);
    }

    public Response getNoduleById(long moduleId){
        Subject module = subjectDao.findById(moduleId).orElse(null);
        if(module != null){
            return response.successResponse(module);
        }
        else {
            return response.failedResponse(null);
        }
    }

    public Response getAll(){
        List<Subject> modules = subjectDao.findAll();
        return response.successResponse(modules);
    }

    public Response updateModule(Subject newModule, long moduleId){
        Subject module = subjectDao.findById(moduleId).orElse(null);
        if(module != null){
            module.setModuleName(newModule.getModuleName());
            module.setModuleCode(newModule.getModuleCode());
            module.setSubjectCategory(newModule.getSubjectCategory());
            module.setCredits(newModule.getCredits());
            module.setModuleNumber(newModule.getModuleNumber());
            module.setDepartmentId(newModule.getDepartmentId());
            module.setSemester(newModule.getSemester());
            module.setNtaLevel(newModule.getNtaLevel());
            module.setStatus(newModule.getStatus());
            subjectDao.save(module);

            return response.successResponse(module);
        }
        else {
            return response.failedResponse(null);
        }
    }

    public Response deleteModule(long moduleId){
        Subject module = subjectDao.findById(moduleId).orElse(null);
        if(module != null){
            module.setStatus("DELETED");
            subjectDao.save(module);
            return response.successResponse(module);
        }
        else {
            return response.failedResponse(null);
        }
    }

    public Response createModuleCategory(SubjectCategory subjectCategory){
        subjectCatDao.save(subjectCategory);
        return response.successResponse(subjectCategory);
    }

    public Response getModuleCat(){
        List<SubjectCategory> subjectCategoryList = subjectCatDao.findAll();
        return response.successResponse(subjectCategoryList);
    }

    public Response getModuleCatById(long id){
        SubjectCategory subjectCategory = subjectCatDao.findById(id).orElse(null);
        if(subjectCategory != null){
            return response.successResponse(subjectCategory);
        }
        else {
            return response.failedResponse("Failed to Get Category with id "+id);
        }
    }

    public Response updateModuleCat(SubjectCategory subjectCategoryData, long id){
        SubjectCategory subjectCategory = subjectCatDao.findById(id).orElse(null);
        if(subjectCategory != null){
            subjectCategory.setCategoryName(subjectCategoryData.getCategoryName());
            subjectCatDao.save(subjectCategory);
            return response.successResponse(subjectCategory);
        }
        else {
            return response.failedResponse("Failed to update Category with id "+id);
        }
    }
}
