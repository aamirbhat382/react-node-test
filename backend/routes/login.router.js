const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const user = require("../models/user");

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        // console.log(req.body)
        const userExist = await user.findOne({ email:username }).select("+password").exec();
        if (!userExist) {
            return res.status(200).json({
                status: 400,
                message: "Email not found",
                success: false,
                data: null,
            });
        }
        // console.log(userExist)
        const validPassword = await bcrypt.compare(password, userExist.password);
        if (!validPassword) {
            return res.status(200).json({
                status: 400,
                message: "Invalid credentials",
                success: false,
                data: null,
            });
        }
        const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET);
        const userData = {
            name: userExist.name,
            email: userExist.email,
            dob: userExist.dob,
        };
        res.status(200).json({
            status: 200,
            message: "User logged in successfully",
            success: true,
            data: { user: userData, token: token },
        });
    } catch (error) {
        // console.log(error);
        res.status(200).json({
            status: 500,
            message: "Internal server error",
            success: false,
            data: null,
        });
    }
}
)

module.exports = router;
