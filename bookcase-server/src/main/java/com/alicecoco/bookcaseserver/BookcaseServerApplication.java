package com.alicecoco.bookcaseserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.alicecoco.bookcaseserver"})
public class BookcaseServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(BookcaseServerApplication.class, args);
    }

}
