const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine' , 'ejs');

const titles = [];
const contents = [];

app.get("/", function(req,res){
    res.render('home', {titles: titles, contents: contents });
})

app.get("/about", function(req,res){
    res.render('about');
})

app.get("/contact", function(req,res){
    res.render('contact');
})



app.get("/compose", function(req,res){
    res.render('compose', {titles:titles, contents:contents});
})


app.post("/compose", function(req,res){
    const ti = req.body.title; 
    const con = req.body.content;

    titles.push(ti);
    contents.push(con);

    res.redirect("/");
})



var contentTitlePosition;

app.post("/seeContent", function(req,res){

   contentTitlePosition = req.body.submit;
   let contentTitle = titles[contentTitlePosition];
   var url = "/" + contentTitle;
   res.redirect(url);



})

app.get("/:contentTitle", function (req, res) {


  console.log("gg");
  let contentTitle = titles[contentTitlePosition] ;
  let titleGot = contentTitle;
  let contentGot = contents[contentTitlePosition];
  
  const searchContentTitle = req.params.contentTitle;
    res.render('post', {title:titleGot, content: contentGot});



})

app.listen(4000, function(){
    console.log("server is running on port 4000");
})

