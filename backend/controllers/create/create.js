const bcryptjs = require("bcryptjs")
const { Users } = require("../../Models/User")
const validators = require("../../validators/userValidators")


const create = async (req, res) => {
  try {
    const { model } = req.params;
    switch (model) {
      case "users":
        return signUp(req, res)
        
      default:
        return res.status(404).json({ message: "No matching route found" })
    }
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }
}


const signUp = async (req, res) => {
  try {
    const { body} = req

    validators.signUpValidator.validateSync(body, {
      abortEarly: false,
      stripUnknown: true,
    })

    const existingUser = await Users.findOne({ email: body.email })

    if (existingUser) {
      return res.status(403).json({ message: "Email already exists" })
    }

    const hashedPassword = await bcryptjs.hash(body.password, 10)

    const newUser = new Users({
      ...body,
      password: hashedPassword
    });

    await newUser.save()

    return res.status(201).json(newUser)
  } catch (error) {
    let code = error.errors ? 422 : 500
    let response = error.errors ? error.errors[0] : error.message
    return res.status(code).json({ message: response })
  }
}

module.exports = { create }
