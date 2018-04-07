var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(res.recipes);
});

module.exports = router;

let mongoose = require('mongoose');
let Recipe = mongoose.model('Recipe');

router.get('/API/recipes/', function(req, res, next){
  Recipe.find(function(err, recipes){
    //res.send("test2");  
        if(err){
          return next(err);
        };
        //res.send("test1");
        res.json(recipes);
  });
});

router.post('/API/recipes/', function(req, res, next){
  let recipe = new Recipe(req.body); 
  recipe.save(function(err, rec){
        if(err){
          return next(err);
        };
        res.json(rec);
  });
});

router.get('/API/recipe/:recipe', function(req, res){
  res.json(req.recipe);
})

router.param('recipe', function(req, res, next, id){
  let query = Recipe.findById(id);
  query.exec(function(err, recipe){
    if(err){
      return next(err);
    }
    if(!recipe){
      return next(new Error('not found' + id));
    }
    req.recipe = recipe;
    return next();
  });
});

router.delete('/API/recipe/:recipe', function(req, res, next){
  req.recipe.remove(function(err){
    if(err){
      return next(err);      
    }
    res.json(req.recipe);
  })
});

router.put('/API/recipe/:recipe', function(req, res, next){
  req.recipe.save(function(err){
    if(err){
      return next(err);      
    }
    res.json("updated recipe");
  })
});