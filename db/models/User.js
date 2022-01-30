module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        message: "User Taken",
      },
    },
    password: { type: DataTypes.STRING, allowNull: false },
  });
  return User;
};
