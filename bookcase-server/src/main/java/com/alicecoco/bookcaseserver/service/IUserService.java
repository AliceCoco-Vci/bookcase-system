package com.alicecoco.bookcaseserver.service;

import com.alicecoco.bookcaseserver.entity.User;

public interface IUserService {
    public User findUserByName(String username);
}
