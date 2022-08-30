const express = require("express");
const app = express();
const port = 3000;

app.get("/greeting", (request, response) => {
    response.send("Hello, stranger")
  });

  app.get("/greeting/:name", (req, res) => {
    console.log(req.params)
    res.send(" hello, it's so great to see you, " + req.params.name + " ")
  });

  app.get("/tip/:total/:tipPrecentage", (req, res) => {
    console.log(req.params)
    res.send("Your tip " + (req.params.total) * (req.params.tipPrecentage /100))
  });

  const ball = [
    "It is certain", "It is decidedly so", 
    "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", 
    "Most likely", "Outlook good",
    "Yes", "Signs point to yes", 
    "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", 
    "Concentrate and ask again","Don't count on it", 
    "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"]
  
    const randomResponse = ball[Math.floor(Math.random() * ball.length)];


    app.get("/magic/:question", function (req, res) {
        res.send(`${req.params.question} <h1>${randomResponse}</h1>`)
    });


  app.listen(port, () => {
    console.log("listening on port", port)
  });


