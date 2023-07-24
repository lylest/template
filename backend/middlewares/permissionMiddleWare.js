const { freeRoutes } = require("../utils/freeRoutes")
const { Users } = require("../Models/User");

async function permissionMiddleWare(req, res, next) {
  try {
    const { model } = req.params;

    if (freeRoutes.includes(model)) {
      return next()
    }

    checkForPermission(req, res, next)
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function checkForPermission(req, res, next) {
  try {
    const { userId } = req.userDetails
    const { action, model } = req.params
    const isModelExist = await Users.findOne({
      _id: userId,
      "permissions.name": model,
    });
    if (isModelExist === null) {
      return res
        .status(404)
        .json({ message: "Unsufficient Permission to access the resource" })
    }

    if (isModelExist) {
      const hasPermission = isModelExist.permissions.map((permission) => {
        if (permission.name === model) {
          if (permission.list.includes(action)) {
            return next();
          } else {
            return res.status(401).json({
              message:
                "You do not have permission to access this resource" + action,
            });
          }
        }
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}
module.exports = { permissionMiddleWare }
