package com.alicecoco.bookcaseserver.bean;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Data
@ApiModel(value = "Result", description = "ResultInfo")
public class Result {
    private String status;
    private String msg;

    private String token;

    public Result(String status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    public Result(String status, String msg, String token) {
        this.status = status;
        this.msg = msg;
        this.token = token;
    }

}


