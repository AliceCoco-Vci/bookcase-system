package com.alicecoco.bookcaseserver.common;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.Nullable;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class BaseDto<T> implements Serializable {

    @ApiModelProperty(value = "时间戳(ms)", required = true, example = "1658310338911")
    @Length(min = 13, max = 13, message = "固定长度13位")
    private LocalDateTime timeStamp;

    @ApiModelProperty(value = "请求流水号", required = true, example = "9fd27ed7ead44fed82bc273ee9f3a072")
    @NotBlank(message = "请求方业务唯一流水不允许为空")
    @Length(max = 32, message = "请求方业务唯一流水最大长度是32")
    private String transIDO;

    @Valid
    @ApiModelProperty(value = "数据")
    private T data;

    @Nullable
    @ApiModelProperty(value = "服务使用方token")
    private String accessToken;

}
