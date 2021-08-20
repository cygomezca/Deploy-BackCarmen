const config = require('config');
const express = require('express');
const path= require('path');
const session= require('express-session');
const methodOverride = require("method-override") ;
const flash = require ("connect-flash");
const passport = require ("passport");
const morgan  = require("morgan");
const MongoStore = require("connect-mongo");


/* const { createAdminUser } = require ("./libs/createUser"); */

require("./config/passport");

// Initializations
const app = express();

/*createAdminUser();*/

// settings
const port = process.env.PORT || config.get('PORT');
app.set("port", port);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
/* Access Control Allow Origin */
app.use((req, res, next) => {
// Website you wish to allow to connect
res.setHeader("Access-Control-Allow-Origin", "*");

// Request methods you wish to allow
res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
);

// Request headers you wish to allow
res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
);

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader("Access-Control-Allow-Credentials", true);

next();
});

/*app.use(
    session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: config.MONGODB_URI }),
    })
);*/

/*app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
});*/

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/plato.routes'));
app.use(require('./routes/user.routes'));
app.use(require('./routes/empresa.routes'));
app.use(require('./routes/tipodeplato.routes'));

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
    res.render("404");
});

module.exports = app;
