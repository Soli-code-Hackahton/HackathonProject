const Tracking = require("../models/trackings");

exports.createTracks = async (req, res) => {
    const {title, description} = req.body;
    const newTracking = new Tracking({title, description});
    await newTracking.save();
    res.json({message: "Task saved"});
};
exports.getTracks = async (req, res) => {
    const tasks = await Tracking.find();
    res.json(tasks);
};
exports.getTrack = async (req, res) => {
    const task = await Tracking.findById(req.params.id);
    res.json(task);
};
exports.updateTrack = async (req, res) => {
    const {title, description} = req.body;
    await Tracking.findOneAndUpdate({_id: req.params.id}, {title, description});
    res.json({message: "Task updated"});
};
exports.deleteTrack = async (req, res) => {
    await Tracking.findByIdAndDelete(req.params.id);
    res.json({message: "Task deleted"});
};
