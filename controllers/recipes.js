
  const Recipe = require('../models/recipe')

  module.exports = {
    index,
   
    new: newRecipe,
   
  };
 
  function index(req, res) {
    Recipe.find({}, function (err, recipes) {
      res.render("recipes/index", { title: "All Recipes", recipes });
    });
  }
  
  //function show
  
  function newRecipe(req, res) {
    res.render("recipes/new", { title: "Add Recipe" });
  }
  
    //function create

    // One way to create data using a mongoose model
    // Movie.create(req.body, function(err, newMovie) {
    //   // functionality to run after movie has been created
    // })
   // const recipe = new Recipe(req.body);
   // recipe.save(function (err) {
   //   if (err) return res.redirect("/recipes/new");
   //   console.log(recipe);
   //   res.redirect(`/recipes/${recipe._id}`);
   // });
  
  