const express = require("express");
const router = express.Router();
const Tracking = require("../controllers/tracking");


router.get("/{id}", Tracking.getTrack);
router.get("/", Tracking.getTracks);
router.post("/", Tracking.createTracks);
router.put("/{id}", Tracking.updateTrack);
router.delete("/{id}", Tracking.deleteTrack);

module.exports = router;