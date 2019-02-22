var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});


var campgrounds = [
  {name: "Salmon Creek", image: "https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg"},
  {name: "Granite Hill", image: "https://api.campgroundbooking.com/api/v1/property/5a3a0399d9c7ef48b9a3be5f/image/Tent%20platform%20at%20nelson%20city%20campground_600_thumb.jpg"},
  {name: "Mountain Goat's Rest", image: "https://media-cdn.tripadvisor.com/media/photo-s/04/38/c5/85/mather-campground.jpg"},
  {name: "Salmon Creek", image: "https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg"},
  {name: "Granite Hill", image: "https://api.campgroundbooking.com/api/v1/property/5a3a0399d9c7ef48b9a3be5f/image/Tent%20platform%20at%20nelson%20city%20campground_600_thumb.jpg"},
  {name: "Mountain Goat's Rest", image: "https://media-cdn.tripadvisor.com/media/photo-s/04/38/c5/85/mather-campground.jpg"},
  {name: "Salmon Creek", image: "https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg"},
  {name: "Granite Hill", image: "https://api.campgroundbooking.com/api/v1/property/5a3a0399d9c7ef48b9a3be5f/image/Tent%20platform%20at%20nelson%20city%20campground_600_thumb.jpg"},
  {name: "Mountain Goat's Rest", image: "https://media-cdn.tripadvisor.com/media/photo-s/04/38/c5/85/mather-campground.jpg"}
];


app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);

  // redirect back to campgrounds page
  res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});





app.listen(3000, function() {
  console.log("The YelpCamp server is listening....!")
});