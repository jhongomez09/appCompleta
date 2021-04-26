import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name: String,
    price: String,
    category: String,
    brand: String,
    imgUrl: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema)