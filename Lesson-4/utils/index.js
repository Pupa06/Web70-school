import jwt from 'jsonwebtoken';

const SECRET_KEY = 'dfdsvr1434@$%';
const generateToken = (data) => {
 const token =jwt.sign(data , SECRET_KEY, {
    expiresIn: 500
 });
 return token;
};

const verifyToken = (token) => {
    const getDecode = jwt.verify(token, SECRET_KEY);
    return getDecode;
};

export {
    generateToken,
    verifyToken
}