const mongoose = require('mongoose');
const comicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issueNumber: { type: Number, required: true },
    publisher: { type: String },
    price: { type: Number, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }
});
module.exports = mongoose.model('Comic', comicSchema);