const { Users } = require("../../Models/User")

const remove = async (req, res) => {
  try {
    const { model } = req.params
    switch (model) {
      case "users":
        return removeUserDetails(req, res)

      default:
        return res.status(404).json({ message: "No Matching Route Found" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

const removeUserDetails = async (req, res) => {
  try {
    const { roleId } = req.userDetails
    const { id } = req.query
    const removedUser = await Users.findOneAndDelete({ _id: id })
    if (removedUser) {
      return res.status(200).json({ message: "User deleted successfully" })
    } else {
      return res.status(422).json({ message: "Failed to delete user" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = { remove }
