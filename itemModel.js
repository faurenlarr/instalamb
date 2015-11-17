var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/babylambs',
  idAttribute: '_id',
  defaults: {
    image: "http://ak-hdl.buzzfed.com/static/enhanced/terminal05/2012/9/13/16/enhanced-buzz-3104-1347566610-4.jpg",
    caption: "We love baby lambs!",
    likes: 0,
  },
  initialize: function () {

  }
});
