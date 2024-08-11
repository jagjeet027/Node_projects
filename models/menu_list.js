// menu_list.js

const mongoose = require('mongoose');

const menu_Item_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Ingredients: {
    type: Array,
  },
  is_drinks: {
    type: Boolean,
    default: false,
  },
  is_vegetarian: {
    type: Boolean,
    default: true,
  },
  taste: {
    type: String,
    enum: ['sweet', 'sour', 'spicy', 'bitter'],
    default: 'sweet',
  },
  is_sale: {
    type: Number,
    default: 0,
  },
});

const MenuList = mongoose.model('MenuList', menu_Item_schema ,'menu_list');

module.exports = MenuList;
