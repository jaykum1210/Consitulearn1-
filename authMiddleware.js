const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Adjust path based on your structure

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password"); // Exclude password from response
        if (!req.user) {
            return res.status(401).json({ msg: "User not found" });
        }
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid token" });
    }
};

module.exports = authMiddleware;
