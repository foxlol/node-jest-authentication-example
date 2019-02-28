const { factory } = require("factory-girl");
const { User } = require("../src/app/models");

factory.define("User", User, {
  name: factory.chance("name"),
  email: factory.chance("email"),
  password: factory.chance("word")
});

module.exports = factory;
