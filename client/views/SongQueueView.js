// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({

  tagName: 'ul',
  className: 'songQueue',
  events: {
    'click': 'queueClickEvent',
    'click .button': 'buttonClick',
  },
  initialize: function() {
    this.$el.html('<th>SongQueue</th>');
    this.collection.on('add dequeue', this.render, this );
    this.render();
  },

  render: function() {
    this.collection.each(this.renderEntry, this);
    return this.$el
  },

  renderEntry: function(song) {
    var view = new MyTunes.Views.SongQueueEntryView({model: song}).render();
    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new MyTunes.Views.SongQueueEntryView({model: song}).render()
      })
    );
  },

  queueClickEvent: function() {
    this.trigger('dequeue', this.model)
  }
});
