import mongoose, { Schema } from "mongoose";

const diarySchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
  },
  picture: {
    type: Array,
  },
  mood: {
    type: String,
  },
});

const Diary = mongoose.model("Diary", diarySchema);

export default Diary;