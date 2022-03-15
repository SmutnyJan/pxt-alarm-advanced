input.onButtonPressed(Button.A, function () {
    alarm.turnOnAlarmAndBroadcast(onText)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == onText) {
        alarm.turnOnAlarmAndBroadcast(onText)
    } else if (receivedString == offText) {
        alarm.turnOffAlarmAndBroadcast(offText)
    }
})
input.onButtonPressed(Button.B, function () {
    alarm.turnOffAlarmAndBroadcast(offText)
})
let offText = ""
let onText = ""
radio.setGroup(1)
onText = "alarm_on"
offText = "alarm_off"
basic.forever(function () {
	
})
