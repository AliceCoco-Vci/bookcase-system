package com.alicecoco.bookcaseserver.service;

import com.alicecoco.bookcaseserver.bean.MyBook;
import com.alicecoco.bookcaseserver.common.BaseDto;
import com.alicecoco.bookcaseserver.bean.Result;

public interface IBookService {
    public Result inputNewBook(BaseDto<MyBook> dto);
}
