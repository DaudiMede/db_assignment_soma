package com.example.soma.api.response.response;

import lombok.Data;

@Data
public class APIResponse {
    private ResponseHeader responseHeader;
    private ResponseBody responseBody;

    @Data
    public static class ResponseHeader {
        private int responseCode;
        private String responseStatus;
        private String responseMessage;
    }

    @Data
    public static class ResponseBody{
        private Object responseBody;
    }

    public APIResponse successResponse(String message, Object responseBody){
        APIResponse apiResponse = new APIResponse();
        ResponseHeader responseHeader = new ResponseHeader();
        responseHeader.setResponseCode(1);
        responseHeader.setResponseStatus("success");
        responseHeader.setResponseMessage(message);

        ResponseBody apiResponseBody = new ResponseBody();
        apiResponseBody.setResponseBody(responseBody);

        apiResponse.setResponseHeader(responseHeader);
        apiResponse.setResponseBody(apiResponseBody);
        return apiResponse;
    }

    public APIResponse failedResponse(String message){
        APIResponse apiResponse = new APIResponse();
        ResponseHeader responseHeader = new ResponseHeader();
        responseHeader.setResponseCode(1);
        responseHeader.setResponseStatus("failed");
        responseHeader.setResponseMessage(message);

        ResponseBody apiResponseBody = new ResponseBody();
        apiResponseBody.setResponseBody(responseBody);

        apiResponse.setResponseHeader(responseHeader);
        apiResponse.setResponseBody(apiResponseBody);

        return apiResponse;
    }
}
