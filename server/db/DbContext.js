import HouseSchema from "../models/House";
import JobSchema from "../models/Job";
import CarSchema from "../models/Car";
import mongoose from "mongoose";

class DbContext {
  Houses = mongoose.model("House", HouseSchema)
  Jobs = mongoose.model("Jobs", JobSchema)
  Cars = mongoose.model("Car", CarSchema)
}

export const dbContext = new DbContext();
