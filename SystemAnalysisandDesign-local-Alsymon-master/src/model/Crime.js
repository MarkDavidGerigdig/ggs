const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Crime = sequelize.define("tbl_crimes", {
    crime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    report: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coordinates: {
      type: DataTypes.JSON,
      allowNull: false,
    }
  },
  {
    timestamps: false
  });

  return Crime;
};