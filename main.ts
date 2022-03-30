input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
let Player: game.LedSprite = null
basic.showString("X = Game over")
let Enemy = game.createSprite(randint(0, 5), randint(0, 5))
Player = game.createSprite(2, 2)
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Enemy.set(LedSpriteProperty.X, randint(0, 5))
        Enemy.set(LedSpriteProperty.Y, randint(0, 5))
    }
})
