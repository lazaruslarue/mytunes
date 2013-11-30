// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.models.length === 1)
      this.playFirst();
    })
  },

  playFirst: function() {
    debugger;
    // if (this.models.at(0)) {
    //   debugger;
    // }
  }

});
