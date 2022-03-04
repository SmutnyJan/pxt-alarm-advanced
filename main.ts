input.onButtonPressed(Button.A, function () {
    Alarm.SpustitAlarmAOdesli(onText)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == onText) {
        Alarm.SpustitAlarmAOdesli(onText)
    } else if (receivedString == offText) {
        Alarm.VypnoutAlarmAOdesli(offText)
    }
})
input.onButtonPressed(Button.B, function () {
    Alarm.VypnoutAlarmAOdesli(offText)
})
let offText = ""
let onText = ""
radio.setGroup(1)
onText = "alarm_on"
offText = "alarm_off"
basic.forever(function () {
	
})
