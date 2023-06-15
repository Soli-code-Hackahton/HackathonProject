const Tracking = require("../models/trackings");
const Users = require("../models/users");

async function EmailTask() {
    const trackings = Tracking.find({status: "pending"});
    trackings.forEach(async task => {
        const user = await Users.findById(task._id);
        const email = user.email;
        const subject = "Your task is pending";
        const description = `Your payment ${task.title} is pending. Please complete it as soon as possible.`;

        sendEmail(email, subject, description);
    })
    ;

}

module.exports = EmailTask;