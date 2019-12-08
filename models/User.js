const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  name: String,
  registered: { type: Boolean, default: false },
  wallet: { type: Number, default: 0 },
  login: { type: String, lowercase: true },
  password: String,
  adress: String
});

mongoose.model("users", userSchema);
