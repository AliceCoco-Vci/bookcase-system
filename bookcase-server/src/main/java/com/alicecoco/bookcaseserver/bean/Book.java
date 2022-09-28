package com.alicecoco.bookcaseserver.bean;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "Book", description = "BookInfo")
public class Book {

    @ApiModelProperty(value = "书籍id")
    private int id;
    @ApiModelProperty(value = "书名")
    private String title;
    @ApiModelProperty(value = "作者")
    private String author;
    @ApiModelProperty(value = "购买日期")
    private String startday;
    @ApiModelProperty(value = "价格")
    private Long price;
    @ApiModelProperty(value = "出版社")
    private String press;
    @ApiModelProperty(value = "购买方式")
    private String purchaseway;
    @ApiModelProperty(value = "备注")
    private String info;

}
