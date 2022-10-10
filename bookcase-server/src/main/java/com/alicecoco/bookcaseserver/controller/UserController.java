package com.alicecoco.bookcaseserver.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.bean.User;
import com.alicecoco.bookcaseserver.service.impl.UserServiceImpl;
import com.alicecoco.bookcaseserver.utils.TokenUtil;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/login")
    public Result findUserByName(@RequestParam("username")String username,
                                 @RequestParam("password")String password)
            throws JsonProcessingException {
        User user = userService.findUserByName(username);
        if (user.getPassword().equals(password)){
            String token= TokenUtil.sign(user);
            return new Result("success", "成功!",username,token);
        } else{
            return new Result("error", "失败!");
        }
    }
    @RequestMapping("/getsome")
    public String getsome()
    {
        return "获取成功";
    }
}
