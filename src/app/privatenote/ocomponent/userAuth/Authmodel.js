const { default: mongoose } = require("mongoose");

const Userauthschema=mongoose.Schema({name:{String,required},
    collage:{String,required},  email:{String,required},password:{String,required}  });
    export const UserauthModel= Userauthschema.models.alluser|| mongoose.model("alluser",Userauthschema)