package com.alicecoco.bookcaseserver.service.impl;

import com.alicecoco.bookcaseserver.domain.dto.BookInputReq;
import com.alicecoco.bookcaseserver.service.IBookService;
import org.springframework.stereotype.Service;
import com.alicecoco.bookcaseserver.entity.Result;

@Service
public class BookServiceImpl implements IBookService {

    @Override
    public Result inputnewbook(BookInputReq dto) {

        return new Result("success", "录入成功!");
    }
}
