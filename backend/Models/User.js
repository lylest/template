const mongoose = require("mongoose")
const { date } = require("yup")
const { generatePermissions } = require("../utils/generatePermissions")

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    accountStatus: {
      type: String,
      required: false,
      default:"active"
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    roleId: {
      type: Number,
      required: false,
      default:2
    },
    permissions: {
      type:Array,
      default:generatePermissions(),
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
      required:true,
      default: "https://picsum.photos/seed/picsum/200/200",
     },
  },
  { timestamps: true }
)

const Users = mongoose.model("users", userSchema)

module.exports = {
  Users,
}
