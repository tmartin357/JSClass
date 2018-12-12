var express = require('express');
var path = require('path');

var app = express();

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home Page'
  });
});

//Add Magic Route
var magicRouter = require('./routes/magic');
app.use('/magic', magicRouter);

app.listen(3000, function() {
  console.log('Server started on port 3000...');
});