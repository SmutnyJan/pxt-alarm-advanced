alarm.onAlarm(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . # . .
        `)
    alarm.turnOnAlarmAndBroadcast(onText)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == onText) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
        alarm.turnOnAlarmAndBroadcast(onText)
    } else if (receivedString == offText) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . . . .
            `)
        alarm.turnOffAlarmAndBroadcast(offText)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
    alarm.turnOffAlarmAndBroadcast(offText)
})
let offText = ""
let onText = ""
radio.setGroup(1)
onText = "alarm_on"
offText = "alarm_off"
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    . . . . .
    `)
