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
    this.collection.map(function(song){
      return new MyTunes.Views.SongQueueEntryView({model: song}).render();
    });

    this.collection.on('add', this.render);
    
    this.collection.on('remove', this.render);
    this.render();
    
  },

  render: function() {
    console.log('testrender')
    // this.$el.children.detach(); 
    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new MyTunes.Views.SongQueueEntryView({model: song}).render();  
      })
      
    );
    
  },

});
