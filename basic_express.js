// https://api.telegram.org/bot584181575:AAHOjDEMEAx1dyzUh5WO2HV_wc-R7kcUVJI/setWebhook?url=https://38246077.ngrok.io

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios')

const sendUrl = 'https://api.telegram.org/bot584181575:AAHOjDEMEAx1dyzUh5WO2HV_wc-R7kcUVJI/sendMessage'
const key_shoot = '/shoot'
const key_snoop = "/snoopdogg"
const key_image = '/image'
const key_music = '/music'
const key_josh = 'josh'
const image_url = './family-guy-chicken.png'
const music_url = './love_me_like_you_do.mp3'

app.use(bodyParser.json()) // for parsing application/json
app.use(
	bodyParser.urlencoded({
		extended: true
	})
) // for parsing application/x-www-form-urlencoded

app.post('/', function(req, res) {
	const { message } = req.body
	const user_from = message.from.username
	const reply_id = message.message_id

	console.log('[' + user_from + '] ' + message.text)

	var response_msg = 'Yeah, You could say that!'

  	if (message.text.toLowerCase().includes(key_josh)) {
  		// in case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
  		response_msg = 'I respect my master.'  
	} else if (message.text.startsWith(key_shoot)) {
  		// in case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
  		response_msg = 'Bang! Bang! Bang!'  
	} else if (message.text.startsWith(key_snoop)) {
  		response_msg = 'Nada! Nada! Nada!'
	} else if (message.text.startsWith(key_image)) {
  		response_msg = 'One image coming right up!!'
	} else if (message.text.startsWith(key_music)) {
  		response_msg = 'I will give you music'
	} else {
  		return res.end()    
	}

	axios
	.post(
			sendUrl, {
				chat_id: message.chat.id,
				reply_to_message_id: reply_id,
				text: user_from + ', ' + response_msg
			}
		 )

	res.end('Success')
});

app.listen(3000, function() {
	console.log('Listening to port 3000!')
});