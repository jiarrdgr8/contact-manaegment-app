import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add the user's name"]
  },
  email: {
    type: String,
    required: [true, 'Please add the email'],
    unique: [true, 'Email address already taken']
  },
  password: {
    type: String,
    required: [true, 'Please add the password'],
    index: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('users', userSchema);

export default User;