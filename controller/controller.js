const request = require('request');
const cheerio = require('cheerio');
var axios = require('axios');
var express = require('express');
var router = express.Router();
var path = require('path');


//========================GET ROUTE==========================//



router.get("/scrape", function(req, res) {
  request("https://cnn.com", function(error, response, html) {
    var $ = cheerio.load(html);
    var titlesArray = [];

    $("h2").each(function(i, element) {
      var result = {};

      result.title = $(this)
        // .html();
        // .text();
console.log(result.title)
      // result.image = $(this)
      //   .attr("src");

      // result.link = $(this)
      //   .children("a")
      //   .attr("href");
console.log("the site is scraped")
      if (result.title !== "" && result.image !== "") {
        if (titlesArray.indexOf(result.title) == -1) {
          titlesArray.push(result.title);

          Recipe.count({ title: result.title }, function(err, test) {
            if (test === 0) {
              var entry = new Recipe(result);

              entry.save(function(err, doc) {
                if (err) {
                  console.log(err);
                } else {
                  console.log(doc);
                }
              });
            }
          });
        } else {
          console.log("Recipe already exists.");
        }
      } else {
        console.log("Not saved to DB, missing data");
      }
    });
    
  });
});







module.exports = router;