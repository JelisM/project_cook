const recipes = [
    {id: 125223, recipe: 'Mac and Cheese', done: true},
    {id: 127904, recipe: 'Enchiladas', done: false},
    {id: 139608, recipe: 'Tacos', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return recipes;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return recipes.find(recipe => recipe.id === id);
  }
  