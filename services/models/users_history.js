const mongoose = require("mongoose");

const usersHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  horoscope: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

usersHistorySchema.index({ userId: 1, createdAt: 1 }, { unique: true });

const UsersHistory = mongoose.model("UsersHistory", usersHistorySchema);
module.exports = UsersHistory;
