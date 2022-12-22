package com.alicecoco.bookcaseserver.service.impl;

import com.alicecoco.bookcaseserver.common.BaseDto;
import com.alicecoco.bookcaseserver.mapper.BookMapper;
import com.alicecoco.bookcaseserver.service.IBookService;
import com.alicecoco.bookcaseserver.utils.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.bean.MyBook;

@Service
public class BookServiceImpl implements IBookService {

    @Autowired
    private BookMapper bookMapper;
    @Override
    public Result inputNewBook(BaseDto<MyBook> dto) {

        MyBook myBook =dto.getData();
//        System.out.println(book.getStartday());
        myBook.setUsername(TokenUtil.getUsername());
        myBook.setEditTime(dto.getTimeStamp());
        if(bookMapper.inputNewBook(myBook)==1){
            return new Result("success", "录入成功!");
        }else{
            return new Result("defeat", "录入失败!");
        }
    }
}
