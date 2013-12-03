// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',
  className: 'songQueueSong',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    'click': function(){
      this.model.play();
    },
  },

  render: function () {
    return this.$el.html(this.template(this.model.attributes));
  }  
  
});
