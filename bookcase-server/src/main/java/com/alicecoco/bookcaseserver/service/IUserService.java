package com.alicecoco.bookcaseserver.service;

import com.alicecoco.bookcaseserver.bean.User;

public interface IUserService {
    public User findUserByName(String username);
}
