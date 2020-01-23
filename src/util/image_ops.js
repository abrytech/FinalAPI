const Op = require('sequelize').Op
const mime = require('mime-types')
const models = require('../models')
const fs = require('fs')
const storeFS = ({ stream, fileName }) => {
  const uploadDir = '../../assets/images'
  const path = `${uploadDir}/${fileName}`
  return new Promise((resolve, reject) =>
    stream
      .on('error', error => {
        if (stream.truncated) { fs.unlinkSync(path) }
        reject(error)
      })
      .pipe(fs.createWriteStream(path))
      .on('error', error => reject(error))
      .on('finish', () => resolve({ path }))
  )
}
export const getPhotos = async (args) => {
  const page = args.page
  const imageFiles = await models.ImageFile.findAll({
    offset: (page - 1) * 10,
    limit: 10
  })
  const totalImageFiles = await models.ImageFile.count()
  return {
    imageFiles,
    page,
    totalImageFiles
  }
}
export const addPhoto = async (args) => {
  const { description, ownerId } = args
  const { mimetype, createReadStream } = await args.file
  const timeStamp = new Date().getTime()
  const fileExtension = mime.extension(mimetype)
  const fileName = `img_${timeStamp}.${fileExtension}`
  const stream = createReadStream()
  const pathObj = await storeFS({ stream, fileName })
  const filePath = pathObj.path
  const imageFile = await models.ImageFile.create({
    fileName,
    filePath,
    fileExtension,
    description,
    ownerId
  })
  return imageFile
}
export const editPhoto = async (args) => {
  const { id, description, ownerId } = args
  const { mimetype, createReadStream } = await args.file
  const timeStamp = new Date().getTime()
  const fileExtension = mime.extension(mimetype)
  const fileName = `img_${timeStamp}.${fileExtension}`
  const stream = createReadStream()
  const pathObj = await storeFS({ stream, fileName })
  const filePath = pathObj.path
  const imageFile = await models.ImageFile.update({
    fileName,
    filePath,
    description,
    ownerId
  }, {
    where: {
      id
    }
  })
  return imageFile
}
export const deletePhoto = async (args) => {
  const { id } = args
  await models.Photo.destroy({
    where: {
      id
    }
  })
  return id
}
export const searchPhotos = async (args) => {
  const searchQuery = args.searchQuery
  const imageFiles = await models.ImageFile.findAll({
    where: {
      [Op.or]: [
        {
          description: {
            [Op.like]: `%${searchQuery}%`
          }
        },
        {
          tags: {
            [Op.like]: `%${searchQuery}%`
          }
        }
      ]
    }
  })
  const totalImageFiles = await models.ImageFile.count()
  return { imageFiles, totalImageFiles }
}
