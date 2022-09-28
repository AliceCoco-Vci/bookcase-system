package com.alicecoco.bookcaseserver.controller;

import com.alicecoco.bookcaseserver.service.impl.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.alicecoco.bookcaseserver.bean.Result;
import com.alicecoco.bookcaseserver.bean.Book;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class BookController {
    @Autowired
    private BookServiceImpl bookService;

    @PostMapping("/book_input")
    public Result InputNewBook(@Valid @RequestBody Book book) {
        return bookService.inputNewBook(book);
    }
}