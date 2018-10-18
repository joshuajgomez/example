var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios')

const sendUrl = 'https://api.telegram.org/bot584181575:AAHOjDEMEAx1dyzUh5WO2HV_wc-R7kcUVJI/sendMessage'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(function (req, res, next) {
  console.log(req.body) // populated!
  next()
})

app.post('/', function(req, res) {
	const { message } = req.body
	const user_from = message.from.username
	const reply_id: message.message_id

	console.log('[' + user_from + '] ' + message.text)

	axios
	.post(
			sendUrl, {
				chat_id: message.chat.id,
				reply_to_message_id: reply_id,
				text: "Got it thanks : " + message.chat.first_name
			}
		 )

	res.end('Success')
});

app.listen(3000, function() {
	console.log('Listening to port 3000!')
});