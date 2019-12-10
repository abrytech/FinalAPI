import { hashSync, compareSync, genSaltSync } from 'bcryptjs'
export default (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    userImage: DataTypes.STRING,
    activationKey: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    spam: DataTypes.BOOLEAN
  }, {
    hooks: {
      afterValidate: (user, options) => {
        if (user.password) {
          user.password = hashSync(user.password, genSaltSync(8), null)
          console.log(user.password)
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
