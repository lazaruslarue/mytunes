// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'li',
  className: 'songQueueSong',

  template: _.template('<span className="songQueueSong">(<%= artist %>) <%= title %> <%= playCount %></span> <button class="removeButton">'),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    // 'click': function(){
    //   this.model.play();
    // },
    'click .removeButton': 'removeClick'
  },

  render: function () {
    return this.$el.html(this.template(this.model.attributes));
  },

  removeClick: function(){
    this.model.dequeue();
  }
  
});
