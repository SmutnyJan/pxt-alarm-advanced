input.onButtonPressed(Button.A, function () {
    Alarm.SpustitAlarmAOdesli(text, zapinaciHodnota)
})
input.onButtonPressed(Button.B, function () {
    Alarm.VypnoutAlarmAOdesli(text, vypinaciHodnota)
})
radio.onReceivedValue(function (name, value) {
    if (name == text && value == zapinaciHodnota) {
        Alarm.SpustitAlarmAOdesli(text, zapinaciHodnota)
    } else if (name == text && value == vypinaciHodnota) {
        Alarm.VypnoutAlarmAOdesli(text, vypinaciHodnota)
    }
})
let vypinaciHodnota = 0
let zapinaciHodnota = 0
let text = ""
radio.setGroup(1)
text = "alarm"
zapinaciHodnota = 1
vypinaciHodnota = 0
basic.forever(function () {
	
})
