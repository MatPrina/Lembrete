package com.back.services;

import com.back.entities.User;
import com.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository rep;

    public User saveUser(User user) {
        rep.save(user);
        return user;
    }

    public User deleteUser(Long id) throws Exception{
        Optional<User> optionalUser = rep.findById(id);
        if(optionalUser.isPresent()) {
             User user = optionalUser.get();
             rep.delete(user);
             return user;
        } else {
            throw new Exception("Usuário não existe");
        }
    }

    public User getUser(Long id) throws Exception{
        Optional<User> optionalUser = rep.findById(id);
        if(optionalUser.isPresent()) {
            User user = optionalUser.get();
            return user;
        } else {
            throw new Exception("Usuário não existe");
        }
    }

    public User validateSession(String token) throws Exception{
        Optional<User> optionalUser = rep.findUserByToken(token);
        if(optionalUser.isPresent()) {
            User user = optionalUser.get();
            return user;
        } else {
            throw new Exception("Sessão inválida...");
        }
    }

    public User validateLogin(String email, String password) throws Exception{
        Optional<User> optionalUser = rep.findUserByEmail(email);
        if(optionalUser.isPresent()) {
            User user = optionalUser.get();
            if(user.getPassword().equals(password)) {
                return user;
            } else {
                throw new Exception("Senha inválida...");
            }
        } else {
            throw new Exception("Usuário não existente...");
        }
    }

    public User updateUser(Long id, User user) throws Exception{
        Optional<User> optionalUser = rep.findById(id);
        if(optionalUser.isPresent()) {
            User preUser = optionalUser.get();

            preUser.setEmail(user.getEmail());
            preUser.setName(user.getName());
            preUser.setPassword(user.getPassword());

            rep.save(preUser);
            return preUser;

        } else {
            throw new Exception("Usuário não existe");
        }
     }
}
