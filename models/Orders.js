const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordersSchema = new Schema({
  title: String,
  body: String,
  typeOfTruck: String,
  adres: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateOfCreation: Date
});

mongoose.model('orders', ordersSchema);
