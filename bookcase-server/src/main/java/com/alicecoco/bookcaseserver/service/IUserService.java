package com.alicecoco.bookcaseserver.service;

import com.alicecoco.bookcaseserver.bean.Book;
import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.bean.User;
import com.alicecoco.bookcaseserver.common.BaseDto;

public interface IUserService {
    public Result findUserByName(BaseDto<User> dto);
}
