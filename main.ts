radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        radio.sendString("mystery")
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == "B") {
        radio.sendString("paris")
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(101)
basic.forever(function () {
	
})
