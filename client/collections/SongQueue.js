// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('add', this.addToQueue, this);
    this.on('dequeue', this.removeFromQueue, this);
    this.on('ended', this._playNext, this);
  },

  addToQueue: function(song){
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  }, 

  removeFromQueue: function(song) {
    console.log('removed ', song)
    this.remove(song);
  }, 
  
  _playNext: function(){
    this.remove(this.at(0));
    if (this.at(0)) {
      this.playFirst();
    }
  }
});
