var TB = {
  convert2UIKoords: function (obj) {
    return {
      x: obj.world.x - game.camera.x,
      y: obj.world.y - game.camera.y
    }
  }
}
