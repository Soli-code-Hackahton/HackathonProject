import Tracking from "../models/tracking";

function EmailTask() {
    const tasks = Tracking.find({status: "pending"});
    tasks.forEach(task => {
        // send email
        // task.status = TrackingStatus.DONE;
        // task.save();
    });

}