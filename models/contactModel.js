import mongoose from "mongoose";

export const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add the contact name']
  },
  email: {
    type: String,
    required: [true, 'Please add the contact name']
  },
  phone: {
    type: String,
    required: [true, 'Please add the contact name']
  }
}, {
  timestamp: true
});

const contact = mongoose.model('Contact', contactSchema);

export default contact;
