import { hashSync, compareSync, genSaltSync } from 'bcryptjs'
import uuid from 'uuid/v4'
export default (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    userImage: DataTypes.INTEGER,
    activationKey: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    spam: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: (user, option) => {
        user.id = uuid()
        if (user.password) {
          user.password = hashSync(user.password, genSaltSync(8), null)
          console.log(`Users beforeCreate Hook hashedPassword = ${user.password}`)
        }
      },
      beforeUpdate: (user, options) => {
        if (user.password) {
          user.password = hashSync(user.password, genSaltSync(8), null)
          console.log(`Users beforeUpdate Hook hashedPassword = ${user.password}`)
        }
      }
    }
  })

  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Addresses, {
      foreignKey: 'userId',
      sourceKey: 'id'
    })
  }

  User.validPassword = function (password) {
    return compareSync(password, this.password)
  }
  return User
}
