/**
 * @description: config port for dev and pro
 */

const dev = {
  port:process.env.PORT_DEV,

  db: {
    host: process.env.DB_HOST_DEV,
    name: process.env.DB_NAME_DEV,
  }
}

const pro = {
  port: process.env.PORT_PRO,
  db: {
    host: process.env.DB_HOST_PRO,
    name: process.env.DB_NAME_PRO,
  }
}

const config ={dev, pro}
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]

