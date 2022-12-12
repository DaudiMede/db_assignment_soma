package com.example.soma.service;

import com.example.soma.api.Response;
import com.example.soma.dao.NTADao;
import com.example.soma.entity.NtaLevel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NTAService {
    private Response response = new Response();

    @Autowired
    private NTADao ntaDao;

    public Response createNTA(NtaLevel ntaLevel){
        ntaDao.save(ntaLevel);

        return response.successResponse(ntaLevel);
    }

    public Response getAllLevels(){
        List<NtaLevel> ntaLevelList = ntaDao.findAll();
        return response.successResponse(ntaLevelList);
    }
}
