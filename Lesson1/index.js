import express from 'express';
import crypto from 'crypto';
import { create } from 'domain';
// const { log } = require("console");
// const {sum , multiply} = require("./math");
// const fs = require("fs");
// const express = require("express");


// const a = 4 , b = 5;
// const result = sum(a, b);
// const mul = multiply(a , b);

// console.log(`Sum between ${a} + ${b} = ${result}`);
// console.log(`Mul between ${a} * ${b} = ${mul}`);

// const app = express();
// const PORT = 3001;

// app.get('/', (req, res) => {
//     res.send(" this is a test")
// });

// app.listen(PORT, () => {
//     console.log(`listening on = ${PORT}`);
// })

// fs.readFile('./test.txt', "utf-8", (erro, data) => {
//     if (erro) {
//         console.error("some thing went wrong" , erro);
//         return;
//     }
//     console.log("Data:", data);
// })
const app = express();
let todoList = [];

app.get('', (req, res) => {
    res.send({
        message: 'Kết nối thành công'
    }

    );
});

app.get('/api/v1/todo-list', (req, res) => {
    res.send({
        data: todoList,
        message: 'Thành Công',
        success: true,
    });
})

app.get('/api/v1/todo-list/add', (req, res) => {
    const newTodo = {
        id: crypto.randomUUID(),
        name: 'pipi',
        createdAt: new Date()
    }
    todoList.push(newTodo);
    res.send({
        data: todoList,
        message: 'Thành Công',
        success: true,
    });
});

app.get('/api/v1/todo-list/delete', (req, res) => {
    const mapFilter = todoList.filter((item, index) => {
        return todoList.findIndex((td) => td.name === item.name) === index;
    });
    todoList = mapFilter;
    res.send({
        data: todoList,
        message: 'Thành Công',
        success: true,
    });
});


app.listen(5001, () => {
    console.log('this is the first');
})



const PI = 3.14;
const doraemon = {
    useName: "doraemon",
    age: 5,
    from: "Japan 2100"
};
console.log(doraemon);
console.log(PI);

for (let i = 0; i < 10; i++) {
    console.log(i);
}