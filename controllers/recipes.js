
  const Recipe = require('../models/recipe')

  module.exports = {
    index
  };
 
 function index(req, res) {
    res.render('recipes/index', {
      recipes: Recipe.getAll()
    });
  }

  function show(req, res) {
    res.render('recipes/show', {
      recipe: Recipe.getOne(req.params.id),
    });
  }