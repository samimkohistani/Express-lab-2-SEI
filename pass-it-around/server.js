
const express = require("express");
const app = express();
const port = 9000;



app.get("/", function(req,res){
    res.redirect('/99');
  });
  
  app.get("/:numberOfBottles?", function( req, res ){
    var numberOfBottles = req.params.numberOfBottles || 99;
    var next = numberOfBottles - 1;
    if (numberOfBottles > 1){
      res.send(numberOfBottles + " bottles of beer on the wall! Take one down pass it around");
    }
  
    else{
      res.send("1 bottle of beer on the wall <a href='/'> Start Over </a>");
    }
  });

  app.listen(port, () => {
    console.log("listening on port", port)
  })
