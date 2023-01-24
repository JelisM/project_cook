var express = require('express');

var router = express.Router();

 // All actual paths start with "/recipes"


 // Require the controller that exports To-Do CRUD functions
 var recipesCtrl = require('../controllers/recipes');


 // GET /todos
 router.get('/', recipesCtrl.index);
 router.get('/:id', recipesCtrl.show);

module.exports = router;
