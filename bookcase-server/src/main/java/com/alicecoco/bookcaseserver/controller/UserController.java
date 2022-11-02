package com.alicecoco.bookcaseserver.controller;

import com.alicecoco.bookcaseserver.bean.Book;
import com.alicecoco.bookcaseserver.common.BaseDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.bean.User;
import com.alicecoco.bookcaseserver.service.impl.UserServiceImpl;
import com.alicecoco.bookcaseserver.utils.TokenUtil;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/login")
    public Result findUserByName(@Valid @RequestBody BaseDto<User> dto) {
        return userService.findUserByName(dto);
    }

    @RequestMapping("/getsome")
    public String getsome() {
        return "获取成功";
    }
}
