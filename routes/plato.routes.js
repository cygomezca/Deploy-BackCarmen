const { Router } = require ("express");
const {
    prueba3,
    platoAll,
    platoPost,
    platoPut,
    platoDelete
} = require ("../controllers/ControllerPlato");

const router = Router();
router.get('/prueba3', prueba3);

// Get All
router.get('/platos', platoAll);

// New
router.post('/platos', platoPost);

// Edit
router.put('/platos/:id', platoPut);


// Delete
router.delete('/platos/:id', platoDelete);

module.exports = router;