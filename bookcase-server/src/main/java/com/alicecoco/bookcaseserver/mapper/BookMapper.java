package com.alicecoco.bookcaseserver.mapper;

import com.alicecoco.bookcaseserver.bean.MyBook;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface BookMapper {
    int inputNewBook(MyBook myBook);
}
