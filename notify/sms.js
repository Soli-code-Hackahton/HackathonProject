const sendSms = async function (phoneNumber, message) {
    return await fetch(`https://api.elasticemail.com/v2/sms/send?apikey=${process.env.ELASTIC_EMAIL_API_KEY}&to=${phoneNumber}&body=${message}&isTransactional=false`).then(data => data.json())
}

module.exports = sendSms;