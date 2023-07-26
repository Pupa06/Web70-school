import express from "express";

const app = express();

app.get("/products/:id", (req, res) => {
    res.end(`
    <h1>Hello</h1>
    <p>Đây là method ${req.method} tại url ${req.url}</p>
    <p>Đây là sản phẩm có id: ${req.params}</p>
    `)
})

app.listen(8000, () => {
    console.log(`server is running`);
});