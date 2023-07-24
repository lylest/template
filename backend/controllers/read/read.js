const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { Users } = require("../../Models/User");
const validators = require("../../validators/userValidators");


const read = async (req, res) => {
  try {
    const { model } = req.params;
    switch (model) {
      case "users":
        return login(req, res);

      default:
        return res.status(404).json({ message: "No Matching Route Found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}


const login = async (req, res) => {
  try {
    const { body } = req;
    validators.loginValidator.validateSync(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const user = await Users.findOne({ email: body.email });

    if (!user) {
      return res.status(404).json({ message: "Username not found" });
    }

    const check = await bcryptjs.compare(body.password, user.password);

    if (!check) {
      return res.status(404).json({ message: "Incorrect password" });
    }

    const maxAge = 2000 * 24 * 60 * 60; // 2 days
    const token = jwt.sign(
      { userId: user._id, email: user.email, roleId: user.roleId },
      process.env.SECRET_KEY,
      { expiresIn: maxAge }
    );
    const { password, ...userData } = user.toObject();
    const response = {
      message: "Login successful",
      user: userData,
    };
    res.cookie("token", token, { maxAge: maxAge, httpOnly: true }); // create  cookies to store token
    return res.status(200).json(response);
  } catch (error) {
    let code = error.errors ? 422 : 500;
    let response = error.errors ? error.errors[0] : error.message;
    return res.status(code).json({ message: response });
  }
};

module.exports = { read }
