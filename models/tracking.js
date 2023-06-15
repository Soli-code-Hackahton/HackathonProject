const mongoose = require("mongoose");
const TrackingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "inactive"],
        default: "active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Tracking = mongoose.model("Tracking", TrackingSchema);




module.exports = Tracking;
