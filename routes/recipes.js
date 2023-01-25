const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn')

 // All actual paths start with "/recipes"



 // GET /todos
 router.get('/', recipesCtrl.index);
 router.get('/new', ensureLoggedIn, recipesCtrl.new);
 router.get('/:id', recipesCtrl.show);
 router.post('/:id/update', recipesCtrl.editRecipe);
 router.post('/new', ensureLoggedIn, recipesCtrl.create);
 router.delete('/:id', ensureLoggedIn, recipesCtrl.delete);

module.exports = router;
