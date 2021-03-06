const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User= require('../models/user');

passport.use(
    new LocalStrategy(
      {
        usernameField: 'correo'
      },
      async (correo, password, done) => {
        const user = await User.findOne({ correo: correo });
        if (!user) {
          return done(null, false, { message: "Not User found." });
        } else {
          // Match Password's User
          const match = await User.matchPassword(password);
          if (match) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Incorrect Password." });
          }
        }
      }
    )
  );
    passport.serializeUser((user, done) => {
    done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
    done(err, user);
    });
});