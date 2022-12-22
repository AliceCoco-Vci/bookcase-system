package com.alicecoco.bookcaseserver.service.impl;

import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.common.BaseDto;
import com.alicecoco.bookcaseserver.utils.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alicecoco.bookcaseserver.bean.User;
import com.alicecoco.bookcaseserver.mapper.UserMapper;
import com.alicecoco.bookcaseserver.service.IUserService;


@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public Result findUserByName(BaseDto<User> dto) {
        User user = dto.getData();
        User user2 = userMapper.findUserByName(user.getUsername());
        if (user2.getPassword().equals(user.getPassword())) {
            String token = TokenUtil.sign(user);
            user2.setPassword("******");
            return new Result("success", "成功!", token, user2);
        } else {
            return new Result("error", "用户名或密码错误!");
        }
    }
}
