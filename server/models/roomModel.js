const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 25,
    },
    srcImage: {
        type: String,
        required: true,
    },
    private: {
        type: Boolean,
        required: true,
        default: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Rooms", RoomSchema);