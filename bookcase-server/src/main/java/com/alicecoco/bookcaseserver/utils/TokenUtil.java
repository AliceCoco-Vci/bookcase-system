package com.alicecoco.bookcaseserver.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.alicecoco.bookcaseserver.bean.User;

import java.util.Date;

public class TokenUtil {
    private static final long EXPIRE_TIME= 30*60*100000;//token到期时间,1000=1s
    private static final String TOKEN_SECRET="dream2022bookcase";  //密钥盐

    /**
     * 创建一个token
     * @param user
     * @return
     */
    public static String sign(User user){
        String token=null;
        try {
            Date expireAt=new Date(System.currentTimeMillis()+EXPIRE_TIME);
            token = JWT.create()
                    .withIssuer("auth0")//发行人
                    .withClaim("username",user.getUsername())   //存放数据
                    .withClaim("password",user.getPassword())
                    .withExpiresAt(expireAt)//过期时间
                    .sign(Algorithm.HMAC256(TOKEN_SECRET));
        } catch (IllegalArgumentException|JWTCreationException je) {

        }
        return token;
    }


    /**
     * 对token进行验证
     * @param token
     * @return
     */
    public static Boolean verify(String token){
        try {
            JWTVerifier jwtVerifier=JWT.require(Algorithm.HMAC256(TOKEN_SECRET)).withIssuer("auth0").build();//创建token验证器
            DecodedJWT decodedJWT=jwtVerifier.verify(token);
            System.out.println("认证通过：");
            System.out.println("username: " + TokenUtil.getUsername(token));

            System.out.println("过期时间：    " + decodedJWT.getExpiresAt());
        } catch (IllegalArgumentException |JWTVerificationException e) {
            //抛出错误即为验证不通过
            return false;
        }
        return true;
    }

    /**
     * 获取用户名
     */
    public static String getUsername(String token)
    {
        try{
            DecodedJWT jwt=JWT.decode(token);
            return  jwt.getClaim("username").asString();
        }catch (JWTDecodeException e)
        {
            return null;
        }


    }
}
