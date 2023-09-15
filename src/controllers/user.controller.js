'use strict'

class UserController {

  register = async (req, res, next) =>  {
    try {
      return res.status(200).json({
        code: 'OK',
        metaData: {
          user: 'Hung'
        }
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports =  new UserController()

