const {
    createRoom,
    getRooms,
} = require("../controllers/roomController");

const router = require("express").Router();

router.post("/", createRoom);
router.get("/:userId", getRooms);

module.exports = router;