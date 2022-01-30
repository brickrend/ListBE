const LocalStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

// ** model **
const { User } = require("../db/models");

exports.localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { username: username } });
    let passwordMatch;
    //   ? await bcrypt.compare(password, user.password)
    //   : false;
    if (await bcrypt.compare(password, user.password)) {
      passwordMatch = true;
    } else {
      passwordMatch = false;
    }
    if (passwordMatch) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    console.error(error);
  }
});
