package com.alicecoco.bookcaseserver.bean;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Data
@ApiModel(value = "User", description = "UserInfo")
public class User {
    private int id;
    private String username;
    private String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

}
