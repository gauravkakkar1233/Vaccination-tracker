import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(404).json({
                message: "Token not found login again"
            })
        }
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifiedUser;
        next();
    } catch (err) {
        res.status(500).json({
            message: "Please Login Again" + err
        })
    }

}
const authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    };
};

export {authMiddleware,authorizeRole};