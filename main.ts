let score: TextSprite = null
let textSprite: TextSprite = null
let plr = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 . . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . 3 3 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(plr, 50, 50)
game.onUpdate(function () {
    let scr = 0
    textSprite = textsprite.create("1UP", 15, 2)
    textSprite.setPosition(10, 5)
    score = textsprite.create(convertToText(scr), 15, 1)
    score.setPosition(convertToText(scr).length * 5, 12)
})
