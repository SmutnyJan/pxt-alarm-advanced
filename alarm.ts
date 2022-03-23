//% weight=100 color=#d1242c icon="\uf0f3" block="Alarm"
namespace alarm {
    let alarm = false
    let methodLock = false


    /**
    * Spustí alarm a pošle všem zařízením v okolí pokyn ke spuštění alarmu
    * @message Pokyn
    */
    //% block="Spusť alarm a pošli pokyn %message"

    export function turnOnAlarmAndBroadcast(message: string): void {
        if (alarm == false) {
            radio.sendString(message)
        }
        alarm = true
    }

    /**
    * Vypne alarm a pošle všem zařízením v okolí pokyn k vypnutí alarmu
    * @message Pokyn
    */
    //% block="Vypni alarm a pošli pokyn %message"

    export function turnOffAlarmAndBroadcast(message: string): void {
        if (alarm == true) {
            radio.sendString(message)
        }
        alarm = false
    }


    /**
    * Zkontroluje, jestli nedošlo k pohybu
    * @action Příkazy, které se provedou při moc zapnutí alarmu
    */
    //% block="Při zapnutí alarmu"
    export function onGuardAwaken(action: () => void) {
        const eventID = 111 + Math.randomRange(0, 100);

        control.onEvent(eventID, 0, function () {
            control.inBackground(() => {
                methodLock = true
                action()
                methodLock = false
            })
        })

        control.inBackground(() => {
            while (true) {
                if (alarm) {
                    action()
                }
                basic.pause(20)
            }
        })
    }




}