const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('¡Conectado exitosamente a MongoDB Atlas!'))
    .catch((err) => console.error('Error de conexión a MongoDB:', err));

// Rutas
app.use('/api/authors', require('./routes/authorRoutes'));
app.use('/api/comics', require('./routes/comicRoutes'));

app.get('/', (req, res) => {
    res.send('API de Tienda de Cómics funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});