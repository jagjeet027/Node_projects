const mongoose=require('mongoose')

const menu_Items= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Ingredients:{
        type:Array,
        required:true
    },
    is_drinks:{
        type:Boolean,
        default:false
    },
    is_vegetarian:{
        type:Boolean,
        default:true
    },
    taste:{
        type:String,
        enum:["sweet","sour","spicy","bitter"],
        default:"sweet"
    },
    is_sale:{
        type:Number,
        default:0
    }

    })

const restaurant_items= mongoose.model('menu_list',menu_Items)

module.exports=restaurant_items;