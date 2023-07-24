const { User } = require("../../Models/User")

const update = async (req, res) => {
  try {
    const { model } = req.params
    switch (model) {
      case "users":
        return updateUserDetails(req, res)

      default:
        return res.status(404).json({ message: "No Matching Route Found" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

const updateUserDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const { body } = req;
    const { userId, roleId } = req.userDetails;

    const updatedUser = await User.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        message: "Failed to update user detais",
      });
    }
    return res.status(200).json(updatedUser);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = { update }
