// a mongoose session schema with TTL feature using expireAt field
const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    user_Id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    data: { type: String, default: "" },
    date: { type: Date, default: new Date() },
    expiresAt: { type: Date, expires: "1m", default: Date.now() }
}, { versionKey: false })
// sessionSchema.path("date").index({ expires: 20 });
const Session = mongoose.model("Session", sessionSchema)
export default Session;