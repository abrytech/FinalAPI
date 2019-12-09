export const {
  APP_PORT = 4000,
  NODE_ENV = 'development',
  DB_NAME = 'apollodb',
  DB_USERNAME = 'root',
  DB_PASSWORD = 'abry',
  DB_HOST = 'localhost',
  DB_PORT = '3360',
  ACCESS_TOKEN_SECRET_KEY = 'ILLTHINKABOUTITLATER'
} = process.env

export const IN_PROD = NODE_ENV === 'production'
