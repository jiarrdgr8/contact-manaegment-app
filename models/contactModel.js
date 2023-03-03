import mongoose from "mongoose";

export const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add the contact name']
  },
  email: {
    type: String,
    required: [true, 'Please add the contact name'],
    index: true
  },
  phone: {
    type: String,
    required: [true, 'Please add the contact name'],
    index: true
  }
}, {
  timestamp: true
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
