const { Router } = require ("express");
const {
    prueba,
    empresaAll,
    empresaPut
} = require ("../controllers/ConstrollerEmpresa");

const router = Router();

router.get('/prueba', prueba);
// Get All
router.get('/empresas', empresaAll);

// Actualizar Empresa
router.put('/empresas/:id', empresaPut );

module.exports = router;