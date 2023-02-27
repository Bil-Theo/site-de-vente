const express = require('express')
const auth = require('../middleware/auth')
const stuffControlor = require('../controleurs/stuff')
const multer = require('../middleware/mult-configure')

const router = express.Router();

router.post('/', auth, multer, stuffControlor.createThing);
  
router.put('/:id', auth, multer, stuffControlor.modifyThing);
  
router.delete('/:id', auth, stuffControlor.deleteThing);
  
router.get('/:id', auth, stuffControlor.getOneThing);
  
router.get('/', auth, stuffControlor.getAllThings);

module.exports = router;