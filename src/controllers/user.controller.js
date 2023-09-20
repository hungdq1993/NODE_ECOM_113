'use strict'

const UserService = require("../services/user.service")

class UserController {

  register = async (req, res, next) =>  {
    try {
      return res.status(201).json(await UserService.register(req.body))
    } catch (error) {
      next(error)
    }
  }
}

module.exports =  new UserController()

