// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.map(function(song){
      return new MyTunes.Views.SongQueueEntryView({model: song}).render();
    })
  },

  render: function() {
    return this.$el;
  }

});
