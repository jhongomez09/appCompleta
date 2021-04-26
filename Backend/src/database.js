import mongoose from 'mongoose'

const atlas = 'mongodb+srv://jhon:1010*@cluster0.f3ce7.mongodb.net/store?retryWrites=true&w=majority'

const ipconnect = 'mongodb://localhost/nombreBD'

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log('BD conectada')
    })
    .catch(err => {
        console.log('Error ===========>', err)
    })

