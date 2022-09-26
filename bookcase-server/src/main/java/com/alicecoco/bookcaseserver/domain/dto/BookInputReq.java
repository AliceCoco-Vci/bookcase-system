package com.alicecoco.bookcaseserver.domain.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "BookInputReq", description = "BookInputReq")
public class BookInputReq {

    @ApiModelProperty(value = "书名")
    private String title;

    @ApiModelProperty(value = "作者")
    private String author;
}
