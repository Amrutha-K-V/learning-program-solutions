package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private final String secretKey = "MySuperSecretKeyForJWTGeneration1234567890"; // 32+ chars

    @RequestMapping(value = "/authenticate", method = RequestMethod.GET)
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {

            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            String[] values = credentials.split(":", 2);

            String username = values[0];
            String password = values[1];

            if ("user".equals(username) && "pwd".equals(password)) {

                String token = Jwts.builder()
                        .setSubject(username)
                        .setIssuedAt(new Date(System.currentTimeMillis()))
                        .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000))
                        .signWith(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8)), SignatureAlgorithm.HS256)
                        .compact();

                Map<String, String> tokenMap = new HashMap<>();
                tokenMap.put("token", token);
                return ResponseEntity.ok(tokenMap);
            } else {
                return ResponseEntity.status(401).body("Invalid credentials");
            }
        }

        return ResponseEntity.status(400).body("Missing Authorization Header");
    }
}
