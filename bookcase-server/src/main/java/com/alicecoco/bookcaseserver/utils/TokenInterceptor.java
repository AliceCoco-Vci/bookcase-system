package com.alicecoco.bookcaseserver.utils;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class TokenInterceptor implements HandlerInterceptor {
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        //跨域请求会首先发一个option请求，直接返回正常状态并通过拦截器
        if(request.getMethod().equals("OPTIONS")){
            response.setStatus(HttpServletResponse.SC_OK);
            return true;
        }
        // response.setCharacterEncoding("utf-8");
        //获取到token
        String token = request.getHeader("BOOKCASE_ACCESS_TOKEN");
        System.out.println(token);
        if (token!=null){
            boolean result= TokenUtil.verify(token);
            if (result){
                System.out.println("通过拦截器");
                return true;
            }
        }
        //response.setContentType("application/json; charset=utf-8");
        try {
            JSONObject json=new JSONObject();
            json.put("status","500");
            json.put("msg","token verify fail");
            response.getWriter().append(json.toString());
            System.out.println("认证失败，未通过拦截器");
        } catch (Exception e) {
            return false;
        }
        return false;
    }
}
