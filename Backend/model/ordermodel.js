import mongoose from 'mongoose';
const { Schema } = mongoose;

const ordersSchema = new Schema({
   userId:{
      type:String,
      required:true
    },
    gamedetails:{
      gamename:{
      type:Object,
      required:true
   },
   gameprice:{
      type:Object,
      required:false,
   },
},
   
    shippingAddress: {
      Firstname: String,
      Lastname:String,
      Address:String,
      city: String,
      state: String,
      zipCode: Number,
      country:String,
    },
    paymentDetails: {
      cardName:String,
      cardNumber: String,
      expirationDate: String,
      cvv: String,
      
    },

},{
    timestamps:true
});

export default mongoose.model("Orders", ordersSchema);