const { Schema, model } = require("mongoose");
const MovieSchema = new Schema(
  {
    titulo: { type: String, required: true },
    categoria: { type: String, required: true },
    imagen: { type: String, required: true },
    descripcion: { type: String, required: true },
  },
{
  timestamps: true
}
);

module.exports = model('Movie', MovieSchema);