//% weight=100 color=#d1242c icon="\uf0f3" block="Alarm"
namespace alarm {
    let alarm = false

    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)

    /**
    * Spustí alarm a pošle všem zařízením v okolí pokyn ke spuštění alarmu
    * @message Pokyn
    */
    //% block="Spusť alarm a pošli pokyn %message"

    export function turnOnAlarmAndBroadcast(message: string): void {
        if(alarm == false) {
            radio.sendString(message)
        }
        alarm = true
        basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . # . .
        `)
    }

    /**
    * Vypne alarm a pošle všem zařízením v okolí pokyn k vypnutí alarmu
    * @message Pokyn
    */
    //% block="Vypni alarm a pošli pokyn %message"

    export function turnOffAlarmAndBroadcast(message: string): void {
        if(alarm == true) {
            radio.sendString(message)
        }
        alarm = false
        basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
    }


    basic.forever(function () {
        if (alarm) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
        }
    })



}