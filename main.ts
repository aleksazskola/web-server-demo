radio.onReceivedString(function (receivedString) {
    if (receivedString == "AAB") {
        radio.sendString("mystery")
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == "ABB") {
        radio.sendString("paris")
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(101)
basic.forever(function () {
	
})
