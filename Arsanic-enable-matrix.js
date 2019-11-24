input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        basic.showString("fire!")
        led.plot(2, 2)
        led.plot(2, 1)
        led.plot(2, 0)
        led.plot(1, 2)
        led.plot(3, 2)
        led.plot(0, 2)
        led.plot(4, 2)
        led.plot(1, 1)
        led.plot(3, 1)
        led.plot(3, 0)
        led.plot(1, 0)
        for (let index = 0; index < 4; index++) {
            led.toggle(2, 3)
            basic.pause(50)
            led.toggle(1, 3)
            led.toggle(3, 3)
            basic.pause(100)
            led.toggle(2, 4)
            led.toggle(0, 4)
            led.toggle(4, 4)
            basic.pause(150)
        }
    }
    for (let index3 = 0; index3 <= 3071; index3++) {
        if (index3 < 2046) {
            if (index3 <= 1023) {
                pins.analogWritePin(AnalogPin.P8, index3)
            } else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index3 - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 157)
        }
        if (index3 > 0) {
            if (index3 <= 0) {
                pins.analogWritePin(AnalogPin.P12, index3 - 0)
            } else {
                pins.analogWritePin(AnalogPin.P12, 0 - (index3 - 0))
            }
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index3 < 1023) {
            pins.analogWritePin(AnalogPin.P16, 1022 - index3)
        } else if (index3 > 2048) {
            pins.analogWritePin(AnalogPin.P16, index3 - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P16, 157)
        }
        control.waitMicros(1000)
    }
})
led.enable(true)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)
basic.forever(function () {
    for (let index3 = 0; index3 <= 3071; index3++) {
        if (index3 < 2046) {
            if (index3 <= 1023) {
                pins.analogWritePin(AnalogPin.P8, index3)
            } else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index3 - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index3 > 1023) {
            if (index3 <= 2046) {
                pins.analogWritePin(AnalogPin.P12, index3 - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P12, 1023 - (index3 - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index3 < 1023) {
            pins.analogWritePin(AnalogPin.P16, 1022 - index3)
        } else if (index3 > 0) {
            pins.analogWritePin(AnalogPin.P16, index3 - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
        control.waitMicros(1000)
    }
})
