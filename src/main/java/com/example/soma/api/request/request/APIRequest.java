package com.example.soma.api.request.request;

public class APIRequest {
    private RequestHeader requestHeader;
    private RequestBody requestBody;
    public static class RequestBody {
        private Object data;
    }

    public static class RequestHeader {
        private String accessToken;
        private String requestCommand;
        private long timestamp;
    }
}