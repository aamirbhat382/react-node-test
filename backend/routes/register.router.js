const express = require("express");
const user = require("../models/user");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(3).max(200).required(),
      email: Joi.string().email().min(3).max(200).required(),
      password: Joi.string().min(6).max(200).required(),
      dob: Joi.date().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(200).json({
        status: 400,
        message: error.details[0].message,
        success: false,
        data: null,
      });
    }
    const emailExist = await user.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(200).json({
        status: 400,
        message: "Email already exists",
        success: false,
        data: null,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newUser = new user({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      dob: req.body.dob,
    });
    await newUser.save();
    const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET);
    const userData = {
        name: newUser.name,
        email: newUser.email,
        dob: newUser.dob,
    }
    res.status(200).json({
      status: 200,
      message: "User registered successfully",
      success: true,
      data: { user: userData, token: token },
    });
  } catch (error) {
    res.status(200).json({
      status: 500,
      message: "Internal server error",
      success: false,
      data: null,
    });
  }
});
module.exports = router;
