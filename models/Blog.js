const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      referenced: {
        model: "user",
        key: "id",
      },
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;