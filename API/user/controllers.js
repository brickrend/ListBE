const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// ** db
const { User } = require("../../db/models");

exports.register = async (req, res) => {
  const password = req.body.password;
  saltRounds = 10;
  try {
    hashedpassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedpassword;
    const newUser = await User.create(req.body);
    const payload = {
      id: newUser.id,
      username: newUser.username,
      exp: Date.now() + 90000,
    };
    const token = jwt.sign(JSON.stringify(payload), "secret");
    console.log(req.body.user);
    res.json({ token });
  } catch (error) {
    console.error(error);
  }
};

exports.login = (req, res) => {
  const user = req.user;
  const payload = {
    id: user.id,
    username: user.username,
    exp: Date.now() + 90000,
  };
  const token = jwt.sign(JSON.stringify(payload), "secret");
  res.json({ token });
};
