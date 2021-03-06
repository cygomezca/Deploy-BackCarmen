const { Schema, model } = require('mongoose');

const PlatoSchema=Schema({
    name: {
        type: String,
        required: [true, 'Schema: El nombre es obligatorio']
    },
	description: {
        type: String,
        required: [true, 'Schema: La descripcion es obligatoria']
    },
	price: {
        type: String,
        required: [true, 'Schema: El precio es obligatorio']
    },
	id: {
        type: String,
        required: [true, 'Schema: El id es obligatorio']
    },
    idtype: {
        type: String,
        required: [true, 'Schema: El idtipo es obligatorio']
    },
    img: {
        type: String,
        required: [true, 'Schema: La imagen es obligatoria']
    }
	});

module.exports = model('Plato', PlatoSchema);