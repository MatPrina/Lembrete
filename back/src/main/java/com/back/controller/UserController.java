package com.back.controller;

import com.back.entities.User;
import com.back.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/user")
    public ResponseEntity<User> registerUser (@RequestBody User user) {
        User newUser = service.saveUser(user);
        return ResponseEntity.ok(newUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user/{id}")
    public ResponseEntity<User> catchUser(@PathVariable Long id) throws Exception{
        User newUser = service.getUser(id);
        return ResponseEntity.ok(newUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/session/{token}")
    public ResponseEntity<User> confirmSession(@PathVariable String token) throws Exception{
        User newUser = service.validateSession(token);
        return ResponseEntity.ok(newUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login/{email}&{password}")
    public ResponseEntity<User> loginUser(@PathVariable String email, @PathVariable String password) throws Exception{
        User newUser = service.validateLogin(email, password);
        return ResponseEntity.ok(newUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/user/{id}")
    public ResponseEntity<User> eraseUser(@PathVariable Long id) throws Exception{
        User newUser = service.deleteUser(id);
        return ResponseEntity.ok(newUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/user/{id}")
    public ResponseEntity<User> changeUser(@PathVariable Long id, @RequestBody User user) throws Exception{
        User newUser = service.updateUser(id, user);
        return ResponseEntity.ok(newUser);
    }

}
