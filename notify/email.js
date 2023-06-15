const sendEmail = function (email, subject, body) {
    return fetch(`https://api.elasticemail.com/v2/email/send?apikey=${process.env.ELASTIC_EMAIL_API_KEY}&subject=${subject}&from=${email}&bodyHtml=${body}&to=${email}`)
}


module.exports = sendEmail;