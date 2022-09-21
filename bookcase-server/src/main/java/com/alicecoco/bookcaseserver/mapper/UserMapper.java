package com.alicecoco.bookcaseserver.mapper;

import com.alicecoco.bookcaseserver.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserMapper {
    User findUserByName(String username);
}
