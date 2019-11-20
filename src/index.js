const express = require('express');
const app = express();
const path = require('path');
// const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname +'/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares
// app.use(methodOverride('_method'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Static files
app.use(express.static(path.join(__dirname + '/public')));


// Routes
app.use(require('./routes/routes.js'));

app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('Error: ', error);
        
    }
    console.log('Server on port ', app.get('port'));
});