const { Router } = require ("express");
const { renderIndex, renderAbout } = require ("../controllers/ControllerIndex");

const router = Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);

module.exports = router;
