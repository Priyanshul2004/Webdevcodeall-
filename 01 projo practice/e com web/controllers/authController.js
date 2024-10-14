const userModel = require("../models/usermodel");
const { hashPassword, comparePassword } = require("../helpers/authhelper");
const jwt = require("jsonwebtoken");

exports.registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        // Validate input
        if (!name || !email || !password || !phone || !address || !answer) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered',
            });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create a new user instance
        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            answer,
            role: "user", // Default role for new users
        });

        // Save the user to the database
        await user.save();

        // Send success response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({
            success: false,
            message: 'Error in registration',
            error: error.message,
        });
    }
};

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email is not registered" });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '3d' });

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({
            success: false,
            message: 'Error in login',
            error: error.message,
        });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;

        if (!email || !answer || !newPassword) {
            return res.status(400).json({ message: "Email, answer, and new password are required" });
        }

        const user = await userModel.findOne({ email, answer });
        if (!user) {
            return res.status(404).json({ message: "Wrong email or answer" });
        }

        const hashedPassword = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

        res.status(200).json({ success: true, message: "Password reset successfully" });
    } catch (error) {
        console.error("Error in password reset:", error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
};

// Middleware to verify JWT token
exports.verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: "Token not provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = await userModel.findById(decoded._id).select("-password");
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).json({ message: "Invalid token" });
    }
};

// Admin dashboard route
exports.adminDashboard = (req, res) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access forbidden. Admin access required." });
    }
    res.status(200).send("Welcome to the admin dashboard");
};

exports.testController = (req, res) => {
    res.send("Protected route accessed successfully by token");
};
