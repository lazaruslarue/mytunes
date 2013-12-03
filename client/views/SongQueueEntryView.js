// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',
  className: 'songQueueSong',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),

  initialize: function() {
  },

  events: {
    'click': function(){
      this.model.enqueue();
    },
  },

  render: function () {
    return this.$el.html(this.template(this.model.attributes));
  }  
  
});
