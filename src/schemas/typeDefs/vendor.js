import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    vendor(id: ID!): Vendor
    vendors:[Vendor!]!
    whereVendors(where: WhereVendors!):[Vendor!]!
}
extend type Mutation{
  addVendor(firstName: String!, lastName: String!, nikName: String, email: String!, phoneNo: String!, username: String!, password: String!, biographicalInfo: String, vendorImage: String, banner: String, storeName: String, storeUrl: String, activationKey: String, deleted: Boolean, spam: Boolean): Vendor
  updateVendor(id: ID!, data: VendorInput!): Vendor 
  deleteVendor(id: ID!): Boolean
  deleteVendorByWhere(where: WhereVendors!): Boolean
}
type Vendor{
  firstName: String,
  lastName: String,
  nikName: String,
  email: String,
  phoneNo: String,
  username: String,
  password: String,
  biographicalInfo: String,
  vendorImage: String,
  banner: String,
  storeName: String,
  storeUrl: String,
  activationKey: String,
  deleted: Boolean,
  spam: Boolean
}
input WhereVendors{
  firstName: String,
  lastName: String,
  nikName: String,
  email: String,
  phoneNo: String,
  username: String,,
  activationKey: String,
  deleted: Boolean,
  spam: Boolean
}
input VendorInput{
  firstName: String,
  lastName: String,
  nikName: String,
  email: String,
  phoneNo: String,
  username: String,
  password: String,
  biographicalInfo: String,
  vendorImage: String,
  banner: String,
  storeName: String,
  storeUrl: String,
  activationKey: String,
  deleted: Boolean,
  spam: Boolean

}
`
