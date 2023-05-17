// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // set up id, product_name, price, stock, and category_id columns to match seeds, use validate to make sure the data is being entered correctly
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
  product_name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
          isDecimal: true,
      },
  },
  stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
          isNumeric: true,
      },
  },
  // In the category_id column, we define the foreign key relationship to the category model,
  category_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'category',
          key: 'id',
      },
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
