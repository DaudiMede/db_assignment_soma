package com.example.soma.api;

import lombok.Data;

@Data
public class Request {
    private String requestCommand;
    private String entity;
    private Object requestBody;
}
