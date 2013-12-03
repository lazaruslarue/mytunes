// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({

  tagName: 'table',
  className: 'songQueue',
  events: {
    'click .songQueueSong': function() {
      console.log('song in songQueue clicked');
    },
    'click .removeButton': function() {
      console.log('removeButton clicked on song');
    }
  },
  initialize: function() {
    this.$el.html('<th>SongQueue</th>');
    this.collection.on('add remove', this.render, this );
  },

  render: function() {
    this.collection.each(this.renderEntry, this);
    return this.$el
  },

  renderEntry: function(song) {
    var view = new MyTunes.Views.SongQueueEntryView({model: song});
    view.render()

  }
});
