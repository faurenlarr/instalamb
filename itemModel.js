var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/babylambs',
  idAttribute: '_id',
  defaults: {
    image: "https://cdn3.iconfinder.com/data/icons/line/36/sheep-512.png",
    caption: "baby lambs!",
    likes: 0,
  },
  initialize: function () {

  }
});
