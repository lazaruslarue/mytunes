// AppModel.js - Defines a backbone model class for the whole app.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Models = window.MyTunes.Models || {};

MyTunes.Models.AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new MyTunes.Models.SongModel());
    this.set('songQueue', new MyTunes.Collections.SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
    
    params.library.on('enqueue', function(song){ // this is an event listner
      if (this.get('currentSong') !== song) {
        this.get('songQueue').add(song); // this is an event
      }
    }, this);

  }


});
