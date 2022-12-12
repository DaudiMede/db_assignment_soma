package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.RoleDao;
import com.example.soma.dao.StudentDao;
import com.example.soma.dto.StudentDto;
import com.example.soma.entity.Role;
import com.example.soma.entity.Student;
import com.example.soma.entity.User;
import com.example.soma.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private Response response = new Response();
    @Autowired
    private StudentDao studentDao;
    @Autowired
    private UserService userService;

    @Autowired
    private UserRoleService userRoleService;

    @Autowired
    private RoleDao roleDao;

    public Response createStudent(StudentDto studentData){
        Student student = new Student();
        student.setFirstName(studentData.getFirstName());
        student.setMiddleName(studentData.getMiddleName());
        student.setLastName(studentData.getLastName());
        student.setEmail(studentData.getEmail());
        student.setGender(studentData.getGender());
        student.setGuardianName(studentData.getGuardianName());
        student.setGuardianContact(studentData.getGuardianContact());
        student.setDisability(studentData.getDisability());
        student.setAddress(studentData.getAddress());
        student.setPhoneNumber(studentData.getPhoneNumber());
        student.setStatus("APPLICANT");
        student.setCseeIndexNo(studentData.getCseeIndexNo());

            studentDao.save(student);
            User user = new User();
            user.setUsername(student.getEmail());
            user.setPassword(student.getEmail());
            user.setEmail(student.getEmail());
            user.setStatus("ACTIVE");
            userService.createUser(user);

           Role role = roleDao.findByRoleName("STUDENT");
           if(role != null){
               userRoleService.assignRole(user, role.getId());
           }

        return response.successResponse(student);
    }

    public Response getStudentById(long studentId){
        Student student = studentDao.findById(studentId).orElse(null);
        if(student != null){
            return response.successResponse(student);
        }
        else{
            return response.failedResponse(null);
        }
    }

    public Response getApplicants(){
        List<Student> students = studentDao.findAllByStatus("APPLICANT");

        return response.successResponse(students);
    }

    public Response getAll(){
        List<Student> students = studentDao.findAll();
        return response.successResponse(students);
    }

    public Response updateStudent(Student newStudent, long studentId){
        Student student = studentDao.findById(studentId).orElse(null);
        if(student != null){
            student.setFirstName(newStudent.getFirstName());
            student.setMiddleName(newStudent.getMiddleName());
            student.setLastName(newStudent.getLastName());
            student.setAddress(newStudent.getAddress());
            student.setEmail(newStudent.getEmail());
            student.setGender(newStudent.getGender());
            student.setCseeIndexNo(newStudent.getCseeIndexNo());
            student.setClassId(newStudent.getClassId());
            student.setDisability(newStudent.getDisability());
            student.setGuardianName(newStudent.getGuardianName());
            student.setPhoneNumber(newStudent.getPhoneNumber());
            student.setGuardianContact(newStudent.getGuardianContact());
            student.setEnrollmentStatus(newStudent.getEnrollmentStatus());
            student.setStatus(newStudent.getStatus());
            studentDao.save(student);

            return response.successResponse(student);
        }
        else {
            return response.failedResponse(null);
        }
    }

    public Response deleteStudent(long studentId){
        Student student = studentDao.findById(studentId).orElse(null);
        if(student != null){
            student.setStatus("DELETED");
            studentDao.save(student);
            return response.successResponse(student);
        }
        else {
            return response.failedResponse(null);
        }
    }
}
