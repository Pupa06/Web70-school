import { listUser }from "../index.js";
const middleware = {
    verifyToken: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decode = verifyToken(token);
            req.userId = decode.userId;
        } catch (error) {

        }
    },
    validateUser: (req , res, next) => {
        try {
            const findUser = listUser.find((item) => item.id === req.userId)
        } catch (error) {
            
        }
    },
}