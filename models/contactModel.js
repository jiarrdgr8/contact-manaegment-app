import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
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
  timestamps: true
});

const Contact = mongoose.model('contacts', contactSchema);

export default Contact;
