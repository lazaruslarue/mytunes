// Song.js - Defines a backbone model class for songs.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Models = window.MyTunes.Models || {};

MyTunes.Models.SongModel = Backbone.Model.extend({

  // initialize: function() {
  //   this.set('playCount', '0', this);
  // }

  defaults: {
    "playedSoFar":  0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playedSoFar', this.get('playedSoFar')+1)
  },

  enqueue: function() {
    this.trigger('enqueue',this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  dequeue: function() {
    this.collection.remove(this);
  },

  playCount: function() {
    return this.get('playedSoFar');
  }




});
