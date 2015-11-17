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



  //
  // $('.likeme').on('click', function(event){
  //            event.preventDefault();
  //            id = $(this).attr('data-id');
  //            thispic = itemCollection.get(id);
  //            likesnow = thispic.attributes.likes;
  //            likesnow.set({likes: likesnow+1});
  //            thispic.save();
  //
  //          });

    // $('body').on('click','.delete', function(el){
    //                   el.preventDefault();
    //                   id=$(this).attr('data-id');
    //                   thispic = itemCollection.get(id);
    //                   thispic.destroy();
    //
    //                 });
},


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








initStyling: function () {
$('body').prepend("<h1 class='title'>" + 'INSTA' + '<img src="http://www.dormirei.com/fav.ico" class="babylamb"/>'  + 'LAMB' + "<h1>");
$('body').append(templates.imageInput);
page.loadPictures();

},










}; //end of page
