const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const passportJWT = require('./config/passport-jwt-strategy');

const passportGoogle

const MongoStore = require('connect-mongo')(session);

const sassMiddleware = require('node-sass-middleware');

const flash = require('connect-flash');

const customMWare = require('./config/middleware');




app.use(sassMiddleware({
    src: './assests/scss',
    dest: './assests/css',
    debug: true, //for production mode false
    outputStyle: 'extended',
    prefix: '/css',

}));


app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assests'));
//makes the uploads path avaliable to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(expressLayouts);

//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//mongo store used to store the session cookie in the db
app.use(session({ //using the session cookie here
    name: 'codeial',
    //To do 
    secret: 'blahSomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100) //6000000 ms

    },

    //connect-mongo to store the session information such that when the server restarts users who were logged in not log out 
    store: new MongoStore({
            mongooseConnection: db,
            autoRemove: 'disabled'
        },

        function(err) {
            console.log(err || 'connect-mongodb setup ok');
        }
    )


}));

app.use(passport.initialize());
app.use(passport.session());

//authenticated user is set
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMWare.setFlash);

//use express router
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        //console.log('Error : ', err)
        console.log(`Error in running server: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});