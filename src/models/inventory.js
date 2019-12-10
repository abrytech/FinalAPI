export default (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventories', {
    stockStatus: DataTypes.STRING,
    outOfStock: DataTypes.BOOLEAN,
    soldIndividually: DataTypes.BOOLEAN,
    productId: DataTypes.UUID
  }, { })
  Inventory.associate = function (models) {
    // associations can be defined here
    Inventory.belongsTo(models.Products)
  }
  return Inventory
}
