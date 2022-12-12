package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.DepartmentDao;
import com.example.soma.entity.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    private Response response = new Response();
    @Autowired
    private DepartmentDao departmentDao;

    public Response createDepartment(Department department){
        departmentDao.save(department);
        response.setResponseCode("0");
        response.setResponseStatus("Success");
        response.setResponseBody(department);

        return response;
    }

    public Response getDepartmentById(long departmentId){
        Department department = departmentDao.findById(departmentId).orElse(null);
        if(department != null){
            response.setResponseCode("0");
            response.setResponseStatus("Success");
            response.setResponseBody(department);
        }
        else {
            response.setResponseCode("1");
            response.setResponseStatus("Failed to get Department");
            response.setResponseBody(null);
        }
        return null;
    }

    public Response getAllDepartments(){
        List<Department> departments = departmentDao.findAll();
        response.setResponseCode("0");
        response.setResponseStatus("Success");
        response.setResponseBody(departments);

        return response;
    }

    public Response updateDepartment(Department newDepartment, long deptId){
        Department department = departmentDao.findById(deptId).orElse(null);
        if(department != null){
            department.setDepartmentName(newDepartment.getDepartmentName());
            department.setHodId(newDepartment.getHodId());
            departmentDao.save(department);
            response.setResponseCode("0");
            response.setResponseStatus("Success");
            response.setResponseBody(department);
        }
        else {
            response.setResponseCode("1");
            response.setResponseStatus("Failed to Update Department");
            response.setResponseBody(null);
        }
        return response;
    }

    public Response deleteDepartment(long deptId){
        Department department = departmentDao.findById(deptId).orElse(null);
        if(department != null){
            department.setStatus("DELETED");
            departmentDao.save(department);

            response.setResponseCode("0");
            response.setResponseStatus("Success");
            response.setResponseBody(department);
        }
        else {
            response.setResponseCode("1");
            response.setResponseStatus("Failed to Delete dept");
            response.setResponseBody(null);
        }
        return response;
    }
}
