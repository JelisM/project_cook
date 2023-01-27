
   const Recipe = require('../models/recipe')

   module.exports = {
     index,
      new: newRecipe,
       create,
      show,
     delete: deleteRecipe,
     editRecipe
     
   };
  
   function index(req, res) {
     Recipe.find({}, function (err, recipes) {
       res.render("recipes/index", { title: "All Recipes", recipes });
     });
   }
   
   function show(req, res) {
     Recipe.findById(req.params.id, function (err, recipe) {
        console.log(err)
        res.render('recipes/show', { title: 'Recipe Details', recipe})
 
     })
   };
   
   function newRecipe(req, res) {
     res.render("recipes/new", { title: "Add Recipe" });
   }
   
     function create(req, res) {
        req.body.user = req.user
       const recipe = new Recipe (req.body)
       recipe.save(function (err){
         if (err) {
           console.log(err)
           res.redirect('/recipes/new')
       } else {
           res.redirect('/recipes')
       }
 
       })
     };
 
     function deleteRecipe(req, res) {
       Recipe.findByIdAndDelete(req.params.id, function (err, deleteRecipe) {
           console.log("Delete Recipe: ", deleteRecipe)
           res.redirect('/recipes');
       })
   };
   function editRecipe(req, res) {
       Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true }, function (err, editRecipe) {
           console.log("Edit Recipe: ", editRecipe)
           console.log(req.body)
           res.redirect('/recipes');
       })
   };