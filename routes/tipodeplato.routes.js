const { Router } = require ("express");
const {
    prueba2,
    tipodeplatoAll,
    tipodeplatoPut,
    tipodeplatoPost,
    tipodeplatoDelete
} = require ("../controllers/ControllerTipodeplato");

const router = Router();

router.get('/prueba2', prueba2);

// Get All
router.get('/tipodeplatos', tipodeplatoAll);

// New
router.post('/tipodeplatos', tipodeplatoPost);

// Edit
router.put('/tipodeplatos/:id', tipodeplatoPut);


// Delete
router.delete('/tipodeplatos/:id', tipodeplatoDelete);

module.exports = router;