import mongoose from "mongoose";

const groupSchema = mongoose.Schema({
  place: { 
  	type: String,
  	required: true 
  },
 lower_date: {
    type: Date
  },
  upper_date: {
    type: Date
  },
  lower_age: {
    type: Number
  },
  upper_age: {
    type: Number
  },
  lower_budget: {
    type: Number 
  },
  upper_budget: {
    type: Number 
  }
});

export default mongoose.model("Groups", groupSchema);