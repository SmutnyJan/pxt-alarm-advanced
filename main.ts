input.onButtonPressed(Button.A, function () {
    Alarm.spustitAlarmAOdesli(onText)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == onText) {
        Alarm.spustitAlarmAOdesli(onText)
    } else if (receivedString == offText) {
        Alarm.vypnoutAlarmAOdesli(offText)
    }
})
input.onButtonPressed(Button.B, function () {
    Alarm.vypnoutAlarmAOdesli(offText)
})
let offText = ""
let onText = ""
radio.setGroup(1)
onText = "alarm_on"
offText = "alarm_off"
basic.forever(function () {
	
})
