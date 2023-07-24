const yup = require("yup")

const signUpValidator = yup.object({
  username: yup.string().required().trim(),
  region: yup.string().required().min(4),
  email: yup.string().required().email(),
  photoURL: yup.string().required(),
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
