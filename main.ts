let offsetX = 0
let offsetY = 0
let pitch = 0
let roll = 0
let light2 = 0
let light3 = 0
let r = 5
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
loops.everyInterval(50, function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
})
basic.forever(function () {
    light2 = (light2 + 1) % 5
    light3 = light2 === 0 ? (light3 + 1) % 5 : light3;
if (led.point(light2, light3)) {
        offsetX = randint(-50, 50) > roll ? -1 : 1
offsetY = randint(-50, 50) > pitch ? -1 : 1
for (let index = 0; index < r; index++) {
            if (!(led.point(light2 + offsetX, light3 + offsetY)) && light2 + offsetX >= 0 && light2 + offsetX <= 4 && light3 + offsetY >= 0 && light3 + offsetY <= 4) {
                led.toggle(light2 + offsetX, light3 + offsetY)
                led.toggle(light2, light3)
                break;
            } else {
                offsetX = randint(-50, 50) > roll ? -1 : 1
offsetY = randint(-50, 50) > pitch ? -1 : 1
            }
        }
    }
})
