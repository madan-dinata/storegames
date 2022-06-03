import mongoose from 'mongoose'
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name : {
    type: String, 
    require: [true, 'Category name is required']
  }
})

export default mongoose.model('Category', categorySchema)