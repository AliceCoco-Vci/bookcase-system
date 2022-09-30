package com.alicecoco.bookcaseserver.service;

import com.alicecoco.bookcaseserver.common.BaseDto;
import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.bean.Book;

public interface IBookService {
    public Result inputNewBook(BaseDto<Book> dto);
}
