function getImage(image) {
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')

    canvas.width = 200
    canvas.height = 300

    ctx.drawImage(image, 0, 0, 200, 300, 0, 0, 200, 300)

}

getImage('images/DSC_0590.jpg')