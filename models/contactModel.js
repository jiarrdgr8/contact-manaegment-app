import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, 'Please add the contact name']
  },
  email: {
    type: String,
    required: [true, 'Please add the email'],
    index: true
  },
  phone: {
    type: String,
    required: [true, 'Please add the phone number'],
    index: true
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('contacts', contactSchema);

export default Contact;
