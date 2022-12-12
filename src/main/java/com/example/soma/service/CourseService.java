package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.CourseDao;
import com.example.soma.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    private Response response = new Response();
    @Autowired
    private CourseDao courseDao;


    public Response createCourse(Course course){
        courseDao.save(course);
        return response.successResponse(course);
    }

    public Response getAll(){
        List<Course> courseList = courseDao.findAll();
        return response.successResponse(courseList);
    }

    public Response getById(long id){
        Course course = courseDao.findById(id).orElse(null);
        if(course != null){
            return response.successResponse(course);
        }
        else {
            return response.failedResponse("Failed to get user with id "+ id);
        }
    }

    public Response updateCourse(Course courseData, long id){
        Course course = courseDao.findById(id).orElse(null);
        if(course != null){
            return response.successResponse(course);
        }
        else {
            return response.failedResponse("Failed to get Course with Id "+ id);
        }
    }

    public Response deleteCourse(long id){
        Course course = courseDao.findById(id).orElse(null);
        if(course != null){
            course.setStatus("DELETED");
            return response.successResponse(course);
        }
        else {
            return response.failedResponse("Failed to delete course with Id "+ id);
        }
    }
}
