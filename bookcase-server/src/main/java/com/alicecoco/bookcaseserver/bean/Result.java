package com.alicecoco.bookcaseserver.bean;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Data
@ApiModel(value = "Result", description = "ResultInfo")
public class Result<T> {
    private String status;
    private String msg;
    private String token;

    private T data;

    public Result(String status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    public Result(String status, String msg, String token,T data) {
        this.status = status;
        this.msg = msg;
        this.token = token;
        this.data=data;
    }

}


