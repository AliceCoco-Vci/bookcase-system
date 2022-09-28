package com.alicecoco.bookcaseserver.mapper;

import com.alicecoco.bookcaseserver.bean.Book;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface BookMapper {
    int inputNewBook(Book book);
}
