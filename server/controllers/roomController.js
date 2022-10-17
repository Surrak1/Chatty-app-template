const Rooms = require("../models/roomModel");

module.exports.createRoom = async(req, res, next) => {
    try {
        const { name, srcImage, private, owner } = req.body;
        const data = await Rooms.create({
            name,
            srcImage,
            owner,
            private,
        });

        if (data) return res.json({ msg: "Room added successfully." });
        else return res.json({ msg: "Failed to add room to the database" });
    } catch (ex) {
        next(ex);
    }
};

module.exports.getRooms = async(req, res, next) => {
    try {
        const { userId } = req.params;

        const rooms = await Rooms.find({
            $or: [{ owner: userId }, { private: false }]
        });

        res.json(rooms);
    } catch (ex) {
        next(ex);
    }
}