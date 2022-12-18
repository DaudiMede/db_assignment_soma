package com.example.soma.api.request.auth;

import lombok.Data;

@Data
public class AuthenticationRequest {

    public static class AuthRequestBody {
        private String username;
        private String password;
    }
}
