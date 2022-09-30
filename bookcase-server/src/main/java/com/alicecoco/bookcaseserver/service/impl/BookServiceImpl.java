package com.alicecoco.bookcaseserver.service.impl;

import com.alicecoco.bookcaseserver.common.BaseDto;
import com.alicecoco.bookcaseserver.mapper.BookMapper;
import com.alicecoco.bookcaseserver.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.bean.Book;

@Service
public class BookServiceImpl implements IBookService {

    @Autowired
    private BookMapper bookMapper;
    @Override
    public Result inputNewBook(BaseDto<Book> dto) {
        Book book=dto.getData();
//        System.out.println(book.getStartday());
        book.setEditTime(dto.getTimeStamp());
        if(bookMapper.inputNewBook(book)==1){
            return new Result("success", "录入成功!");
        }else{
            return new Result("defeat", "录入失败!");
        }
    }
}
