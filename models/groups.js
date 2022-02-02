import mongoose from "mongoose";

const groupSchema = mongoose.Schema({
  place: { 
  	type: String,
  	required: true 
  },
 start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  lower_age: {
    type: Number
  },
  upper_age: {
    type: Number
  },
  interests: {
    type: Array
  },
  lower_budget: {
    type: Number 
  },
  upper_budget: {
    type: Number 
  }
});

export default mongoose.model("Groups", groupSchema);