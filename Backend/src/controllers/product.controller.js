import Product from '../models/Products'

export const createProduct = async (req, res) => {
    console.log(req.body)

    // destruir objeto que llega del request
    const {name, price, category, brand, imgUrl} = req.body

    //definir el nuevo producto
    const newProduct = new Product({
        name,
        price,
        category,
        brand,
        imgUrl
    })

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProductsByPrice = async (req, res) => {
    const products = await Product.find().sort({price: -1})

    res.status(200).json(products)
}

export const getProductsByDate = async (req, res) => {
    const products = await Product.find().sort({updatedAt: -1})

    res.status(200).json(products)
}

export const getProducts = async (req, res) => {
    const products = await Product.find()

    res.status(200).json(products)
}

export const getProductById = async (req, res) => {
    console.log(req.params)
    console.log(req.params.productId)
    try {
        const product = await Product.findById(req.params.productId)
        console.log(product)
        if (product !== null){
            res.status(200).json(product)
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {new: true})
        console.log(updateProduct)
        if (updateProduct !== null){
            res.status(200).json(updateProduct)
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productDeleted = await Product.findByIdAndDelete(req.params.productId)
        console.log(productDeleted)
        if (productDeleted !== null){
            res.status(200).json({msg: "Producto Borrado"})
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}