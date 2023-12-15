const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Admin = sequelize.define('tbl_admin', {
    username: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  }, {
    timestamps: false, 
  });

  return Admin;
};