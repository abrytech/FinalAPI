export default (sequelize, DataTypes) => {
  const ImageFile = sequelize.define('ImageFile', {
    fileName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    filePath: DataTypes.STRING,
    fileExtension: {
      type: DataTypes.ENUM({
        values: ['jpg', 'jpeg', 'png']
      })
    },
    description: DataTypes.STRING
  }, {})
  ImageFile.associate = function (models) {
    // associations can be defined here
  }
  return ImageFile
}
