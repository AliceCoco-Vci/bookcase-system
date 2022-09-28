package com.alicecoco.bookcaseserver.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alicecoco.bookcaseserver.bean.User;
import com.alicecoco.bookcaseserver.mapper.UserMapper;
import com.alicecoco.bookcaseserver.service.IUserService;

@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    private UserMapper userMapper;
    @Override
    public User findUserByName(String name) {
        User user = userMapper.findUserByName(name);
        return user;
    }
}
