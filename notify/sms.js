const sendSms = await function (phoneNumber, message) {
    return fetch(`https://api.elasticemail.com/v2/sms/send?apikey=${process.env.ELASTIC_EMAIL_API_KEY}&to=${phoneNumber}&body=${message}&from=${process.env.PHONE_NUMBER}&isTransactional=false`).then(data => data.json())

}