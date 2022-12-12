package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.EnrollmentCatDao;
import com.example.soma.dao.EnrollmentDao;
import com.example.soma.entity.Enrollment;
import com.example.soma.entity.EnrollmentCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class EnrollmentService {
    private Response response = new Response();
//    @Autowired
//    private EnrollmentDao enrollmentDao;
//
    @Autowired
    private EnrollmentCatDao enrollmentCatDao;
//
//
//    public Response enrollStudent(long studentId){
//        Enrollment enrollment = new Enrollment();
//        //generate registration number
//        enrollment.setYear(String.valueOf(LocalDate.now().getYear()));
//        enrollmentDao.save(enrollment);
//
//        return response.successResponse(enrollment);
//    }
//
    public Response createEnrollmentCat(EnrollmentCategory enrollmentCategory){
        enrollmentCatDao.save(enrollmentCategory);
        return response.successResponse(enrollmentCategory);
    }

    public Response getAllEnrollmentCat(){
        List<EnrollmentCategory> enrollmentCategoryList = enrollmentCatDao.findAll();
        return response.successResponse(enrollmentCategoryList);
    }

    public Response getEnrollmentCatById(long id){
        EnrollmentCategory enrollmentCategory = enrollmentCatDao.findById(id).orElse(null);
        if(enrollmentCategory != null){
            return response.successResponse(enrollmentCategory);
        }
        else {
            return response.failedResponse("Failed to get Category with id "+ 1);
        }
    }

    public Response updateEnrollmentCat(EnrollmentCategory enrollmentCategoryData, long id){
        EnrollmentCategory enrollmentCategory = enrollmentCatDao.findById(id).orElse(null);
        if(enrollmentCategory != null){
            enrollmentCategory.setCategoryName(enrollmentCategoryData.getCategoryName());
            enrollmentCategory.setShortCode(enrollmentCategoryData.getShortCode());
            enrollmentCatDao.save(enrollmentCategory);
            return response.successResponse(enrollmentCategory);
        }
        else {
            return response.failedResponse("Failed to update Enrollment Category with Id "+ 1);
        }
    }

    public Response deleteEnrollmentCategory(long id){
        EnrollmentCategory enrollmentCategory = enrollmentCatDao.findById(id).orElse(null);
        if(enrollmentCategory != null){
            enrollmentCategory.setStatus("DELETED");
            enrollmentCatDao.save(enrollmentCategory);
            return  response.successResponse(enrollmentCategory);
        }
        else {
            return response.failedResponse("Failed to delete Category with id "+ 1);
        }
    }
}
