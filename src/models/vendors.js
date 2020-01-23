import uuid from 'uuid/v4'
export default (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendors', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nikName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    biographicalInfo: DataTypes.STRING,
    vendorImage: DataTypes.INTEGER,
    banner: DataTypes.INTEGER,
    storeName: DataTypes.STRING,
    storeUrl: DataTypes.STRING,
    activationKey: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    spam: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: (data, option) => {
        data.id = uuid()
      }
    }
  })
  Vendor.associate = function (models) {
    // associations can be defined here
    Vendor.hasOne(models.Addresses, {
      foreignKey: 'vendorId',
      sourceKey: 'id'
    })
    Vendor.hasMany(models.Products, {
      foreignKey: 'productId',
      sourceKey: 'id'
    })
  }
  return Vendor
}
