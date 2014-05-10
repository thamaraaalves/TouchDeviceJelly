
paper.install(window);          

paper.setup('myCanvas1'); 

​

var SSection, Sections, gui, h, mwheel, onFrame, windowHeight, _base, _ref;

​

Path.prototype.setWidth = function(width) {

  this.segments[3].point.x = this.segments[0].point.x + width;

  return this.segments[2].point.x = this.segments[1].point.x + width;

};

​

Path.prototype.setHeight = function(height) {

  this.segments[1].point.y = this.segments[0].point.y + height;

  return this.segments[2].point.y = this.segments[3].point.y + height;

};

​

Path.prototype.reset = function() {

  this.setWidth(0);

  this.setHeight(0);

  return this.smooth();

};

​

h = {

  getRand: function(min, max) {

    return Math.floor((Math.random() * ((max + 1) - min)) + min);

  }

};

​

window.PaperSections = {

  $container: $('#wrapper'),

  i: 0,

  next: 0,

  prev: 0,

  scrollSpeed: 0,

  timeOut: null,

  invertScroll: true,

  currSection: -1

};

​

window.PaperSections.ff = typeof InstallTrigger !== 'undefined';

​

window.PaperSections.win = navigator.appVersion.indexOf("Win") !== -1;


windowHeight = $(window).outerHeight();

​

window.PaperSections.$canvas = $(view.canvas);

​

window.PaperSections.data = window.PaperSections.$canvas.data();

​

window.PaperSections.data.colors = window.PaperSections.data.colors.split(':');

​

if ((_ref = (_base = window.PaperSections.data).sectionscount) == null) {

  _base.sectionscount = window.PaperSections.data.colors.length;

}

​
