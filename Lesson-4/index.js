import express from 'express';
import crypto from 'crypto';
import generateToken, { verifyToken } from './utils/index.js';
const app = express();
app.use(express.json());
export const listUser = [
    {
        id: crypto.randomUUID(),
        userName: 'John',
        age: 36,
        email: 'john@example.com',
        location: 'http://example.com',
        password: '123',
    }
];

app.post('/api/auth/login', (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) throw new Error('Thiếu email!');
        if (!password) throw new Error('Thiếu password');
        const existedUser = listUser.find((item) => {
            return item.email === email && item.password === password
        })
        if (!existedUser) throw new Error(' Sai tài khoản hoặc sai mật khẩu!')
        res.status(200).send({
            data: generateToken({}),
            success: true,
            message: 'Đăng nhập thành công'
        })
    } catch (error) {
        res.status(403).send({
            data: null,
            success: false,
            message: error.message
        })
    }
})

app.get('/api/user-info', (req, res) => {
    try {
        res.status(200).send({
            data: listUser,
            success: true,
            message: 'Tìm thấy'
        });
    } catch (error) {
        res.status(500).send({
            data: null,
            success: false,
            message: error.message
        });
    }
});


app.get('/api/user-info/:id', (req, res) => {
    try {
        res.status(200).send({
            data: decode,
            success: true,
            message: 'Tìm thấy'
        });
    } catch (error) {
        res.status(500).send({
            data: null,
            success: false,
            message: error.message
        });
    }
});


app.listen(5001, () => {
    console.log(`Server running on port ${5001}`);
});