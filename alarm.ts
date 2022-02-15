/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#d1242c icon="\uf0f3"
namespace Alarm {

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
    */
    //% block="Spusť alarm a pošli pokyn %text %onvalue"

    export function SpustitAlarmAOdesli(text: string, onvalue: number): void {
        if(alarm == false) {
            radio.sendValue(text, onvalue)
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
    */
    //% block="Vypni alarm a pošli pokyn %text %offvalue"

    export function VypnoutAlarmAOdesli(text: string, offvalue: number): void {
        if(alarm == true) {
            radio.sendValue(text, offvalue)
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