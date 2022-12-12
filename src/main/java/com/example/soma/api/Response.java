package com.example.soma.api;

import lombok.Data;

@Data
public class Response {
    private String responseCode;
    private String responseStatus;
    private Object responseBody;

    public Response successResponse(Object responseBody){
        Response response = new Response();
        response.setResponseCode("0");
        response.setResponseStatus("Success");
        response.setResponseBody(responseBody);

        return response;
    }

    public Response failedResponse(Object responseBody){
        Response response = new Response();
        response.setResponseCode("1");
        response.setResponseStatus("Failed");
        response.setResponseBody(responseBody);

        return response;
    }
}
