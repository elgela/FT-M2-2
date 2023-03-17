  import { draw, on } from './whiteboard';
  
  var socket = window.io(window.location.origin);

  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    draw(start, end, color, false);
  });

  on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

