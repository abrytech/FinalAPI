import { gql } from 'apollo-server-express'
export default gql`
# scalar Upload

extend type Query{
    imageFile(id: ID!): ImageData
    imageFiles:[ImageFile!]!
    searchImageFiles(searchQuery: String): ImageData
}
extend type Mutation{
  addImageFile(file: Upload!, description:String): ImageFile
  updateImageFile(id: ID!, file: Upload!, description:String): ImageFile 
  deleteImageFile(id: ID!): Boolean
  deleteImageFileByWhere(where: WhereImageFiles!): Boolean
  searchImage(searchQuery: String): ImageData
}
type ImageData {
        image: [ImageFile],
        page: Int,
        totalImage: Int
    }
type ImageFile{
    id: ID,
    fileName: String,
    filePath: String,
    fileExtension: String,
    description: String,
}
input WhereImageFiles{
    id: ID,
    fileName: String,
    description: String,
}
input ImageFileInput{
    file: Upload,
    description: String,
}
`
