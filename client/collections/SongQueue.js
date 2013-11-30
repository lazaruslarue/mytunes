// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1)
        this.playFirst();
    });
    
    this.on('ended', function(){
      this.remove(this.at(0));
      if (this.at(0)) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
  }

});
