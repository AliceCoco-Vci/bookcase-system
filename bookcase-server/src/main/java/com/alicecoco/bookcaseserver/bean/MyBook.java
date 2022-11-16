/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-09-26 17:32:37
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-09-29 16:28:20
 * @FilePath: /bookcase-web/Users/lidihan/bookcase-system/bookcase-server/src/main/java/com/alicecoco/bookcaseserver/bean/Book.java
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
package com.alicecoco.bookcaseserver.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@ApiModel(value = "Book", description = "BookInfo")
public class Book {

    @ApiModelProperty(value = "书籍id")
    private int id;

    @ApiModelProperty(value = "书名")
    private String title;

    @ApiModelProperty(value = "作者")
    private String author;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @ApiModelProperty(value = "购买日期")
    private LocalDateTime startDay;

    @ApiModelProperty(value = "价格")
    private Double price;

    @ApiModelProperty(value = "出版社")
    private String press;

    @ApiModelProperty(value = "购买方式")
    private String purchaseWay;

    @ApiModelProperty(value = "备注")
    private String info;

    @ApiModelProperty(value = "所属用户")
    private String username;

    @ApiModelProperty(value = "编辑时间")
    private LocalDateTime editTime;
}
