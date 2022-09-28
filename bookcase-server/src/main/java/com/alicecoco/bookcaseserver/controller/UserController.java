package com.alicecoco.bookcaseserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.bean.User;
import com.alicecoco.bookcaseserver.service.impl.UserServiceImpl;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/login")
    public Result findUserByName(@RequestParam("username")String username,
                                       @RequestParam("password")String password){

        User user = userService.findUserByName(username);
        if (user.getPassword().equals(password)){
            return new Result("success", "成功!");
        } else{
            return new Result("error", "失败!");
        }
    }
}
