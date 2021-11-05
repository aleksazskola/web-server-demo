radio.onReceivedString(function (receivedString) {
    if (receivedString == "AAB") {
        radio.sendString("mystery")
    } else if (receivedString == "ABB") {
        radio.sendString("paris")
    }
})
radio.setGroup(101)
basic.forever(function () {
	
})
