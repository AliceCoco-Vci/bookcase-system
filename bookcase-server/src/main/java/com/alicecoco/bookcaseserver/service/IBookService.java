package com.alicecoco.bookcaseserver.service;

import com.alicecoco.bookcaseserver.domain.dto.BookInputReq;
import com.alicecoco.bookcaseserver.entity.Result;

public interface IBookService {
    public Result inputnewbook(BookInputReq dto);
}
