package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.ResultDao;
import com.example.soma.entity.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ResultService {
    private Response response = new Response();
    @Autowired
    private ResultDao resultDao;

    public Response uploadCAResult(List<Result> results){
        resultDao.saveAll(results);

        return response.successResponse("Results Uploaded");
    }

    public Response uploadFEResult(List<Result> results){
        resultDao.saveAll(results);

        return response.successResponse("Results Uploaded");
    }

    public Response updateResult(List<Result> results){
        for (Result result:results) {
            resultDao.save(result);
        }

        response.setResponseCode("0");
        response.setResponseStatus("Success");
        response.setResponseBody("Results Uploaded");
        return response;
    }

//    public Response publishResult(String semester, String year){
//        //find by semester and year
//        List<Result> results = new ArrayList<>();
//        for (Result result:results) {
//            result.setStatus("PUBLISHED");
//            resultDao.save(result);
//        }
//        response.setResponseCode("0");
//        response.setResponseStatus("Success");
//        response.setResponseBody("Result Published");
//        return  response;
//    }
}
