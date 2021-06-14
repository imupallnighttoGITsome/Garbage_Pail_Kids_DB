const mongoose = require('mongoose')

const mongooseURI = process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : 'mongodb://localhost/gpk'
    mongoose.connect(mongooseURI, {
       useNewUrlParser: true,
       useCreateIndex: true,
       useUnifiedTopology: true,
       useFindAndModify: false,
    })
    .then(instance, => {
       console.log(`Connected to db: ${instance.connections[0].name}`) 
    })
    .catch(error => {
        console.log('Connection failed!!', error)
    })

    module.exports = mongoose;