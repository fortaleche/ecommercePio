// Vamos a crear la conecion a nuestro mongo atlas
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Conectado a la base de datos');
})
.catch((error) => {
    console.log('error a la base de datos', error);
});

module.exports = mongoose;