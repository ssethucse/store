package com.nct.store.controller;

import com.nct.store.entity.Role;
import com.nct.store.entity.User;
import com.nct.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/user/update")
    ResponseEntity<User> updateUsers(@RequestBody User users) {
        return new ResponseEntity<>(userService.update(users), HttpStatus.OK);
    }

    @DeleteMapping("/user/delete")
    void removeUser(@RequestParam(value = "username") String username) {
        userService.delete(username);
    }

    @GetMapping("/user/getAllDetails")
    ResponseEntity<List<User>> getAllDetails() {
        return new ResponseEntity<>(userService.findAllDetails(), HttpStatus.OK);
    }

    @GetMapping("/user/getDetail")
    ResponseEntity<User> getDetail(@RequestParam(value = "username") String username) {
        return new ResponseEntity<>(userService.findDetails(username), HttpStatus.OK);
    }

    @GetMapping("/user/role/getAllDetails")
    ResponseEntity<List<Role>> getAllRoleDetails() {
        return new ResponseEntity<>(userService.findRoleDetails(), HttpStatus.OK);
    }
}
