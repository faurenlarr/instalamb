var $ = require('jquery');
var _ = require('underscore');
var templates = require('./templates');
var ItemModel = require('./itemModel');
var ItemCollection = require('./itemCollection');

  var itemCollection = new ItemCollection();

$(document).ready(function (){

page.init();

});

var page = {


init: function() {
page.initStyling();
page.initEvents();

},

initEvents: function (){
  $('body').on('click','.submit', function(event){
    event.preventDefault();
    var newLamb = new ItemModel ({
      image: $('.urlinput').val(),
      caption:  $('.titleinput').val(),

    });

    newLamb.save();
  });


},

//
// appendNew: function (){
//   var itemCollection = new ItemCollection();
//   itemCollection.fetch().then(function (collectionData) {
//     template = _.template(templates.images);
//     var finallamb = template(lamb);
//     $('.pic').append(finallamb);
//   });
//
//
// },
loadPictures: function(){
  var itemCollection = new ItemCollection();
  itemCollection.fetch().then(function (collectionData) {
    console.log(itemCollection.models);
    _.each(itemCollection.models, function (el, idx, arr) {
      console.log("this is el: ", el.toJSON());
      page.loadTemplate($('body'), el.toJSON(), templates.images);
    });
  });

},

loadTemplate: function ($el, data, tmpl) {
          var template = _.template(tmpl);
          var html = template(data);
          $el.append(html);
},
  //get collectionData
  //do a _.each
  //append the templated html tothe page


likes: function (){

},




initStyling: function () {
$('body').prepend("<h1 class='title'>" + 'INSTA.LAMB' + "<h1>");
// $('body').append(templates.imageInput);
$('.pic').append(templates.likeButton);

page.loadPictures();



},


//
// imageInput: function() {
//   $('.pic').html(templates.imageInput);
// }










}; //end of page
