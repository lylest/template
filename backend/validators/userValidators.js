const yup = require("yup")

const signUpValidator = yup.object({
  username: yup.string().required().trim(),
  email: yup.string().required().email(),
  phoneNumber: yup.number().required(),
  password: yup.string().required().min(8),
})

const loginValidator = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
})

module.exports = {
  loginValidator,
  signUpValidator,
}
