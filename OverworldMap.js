class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.mapImage = new Image();
    this.mapImage.src = config.src;
    this.foregroundImage = new Image();
    this.foregroundImage.src = config.foregroundSrc;
    this.collisions = config.collisions || {};
    this.pixelSize = config.gameObjects.hero.sprite.pixelSize;
  }

  drawMap(context, cameraPerson) {
    // console.log(cameraPerson.x, cameraPerson.y);
    // if (this.collisions.collision[`${cameraPerson.x},${cameraPerson.y}`]) {
    //   console.log("bumanga");
    // }
    context.drawImage(
      this.mapImage,
      utils.withGrid(9.5) - cameraPerson.x,
      utils.withGrid(7.5) - cameraPerson.y
    );
  }

  drawForeground(context, cameraPerson) {
    context.drawImage(
      this.foregroundImage,
      utils.withGrid(9.5) - cameraPerson.x,
      utils.withGrid(7.5) - cameraPerson.y
    );
  }

  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);

    if (
      x < `-${this.pixelSize - 1}` ||
      y > this.mapImage.naturalHeight - 1 ||
      x > this.mapImage.naturalWidth - 1 ||
      y < `-${this.pixelSize - 1}`
    ) {
      return true;
    }
    return this.collisions.collision[`${x},${y}`] || false;
  }
}

window.OverworldMaps = {
  New_Town: {
    src: "./assets/img/maps/New_Town_35x20.png",
    foregroundSrc: "./assets/img/maps/New_Town_Foreground.png",
    collisions: {
      collision: utils.convertCollision({
        data: [
          0, 0, 0, 257, 0, 257, 0, 0, 257, 257, 257, 257, 257, 257, 257, 257, 0,
          0, 0, 257, 257, 257, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          257, 0, 0, 0, 0, 0, 0, 257, 257, 0, 257, 0, 0, 257, 257, 257, 0, 0, 0,
          0, 257, 0, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
          257, 0, 0, 0, 0, 0, 0, 257, 0, 257, 257, 257, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
          0, 257, 257, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 257, 0, 257, 0, 257, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          257, 0, 0, 0, 257, 0, 257, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 257, 257, 0, 0, 0, 0, 0, 257, 0, 0,
          257, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 257, 257, 257, 0, 0, 0, 0, 0, 257, 0, 0, 257, 257, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 257, 257, 257, 0, 0, 0, 0, 0, 0, 0, 257, 257,
          257, 257, 257, 0, 0, 0, 0, 257, 257, 0, 257, 257, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 257, 257, 257, 0, 0, 0, 0, 0, 0, 0, 257, 257, 0, 257, 257,
          0, 0, 0, 0, 257, 257, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
          257, 257, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0,
          257, 257, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 257, 0, 257, 0, 0, 0,
          257, 0, 0, 0, 257, 0, 0, 0, 257, 0, 0, 0, 0, 0, 257, 0, 257, 257, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0,
          0, 257, 0, 0, 0, 0, 0, 257, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 257, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          257, 0, 257, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 257, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 257, 257, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 257, 257,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0,
          0, 0, 257, 257, 0, 0, 257, 257, 257, 257, 257, 257, 257, 257, 257,
          257, 257, 257, 0, 257, 257, 257, 257, 257, 257, 0, 257, 257, 257, 257,
          0, 0, 0, 0, 0, 0,
        ],
      }),
    },
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        src: "./assets/img/characters/Cloud/cloud.png",
        pixelSize: 32,
        x: utils.withGrid(13),
        y: utils.withGrid(12),
        animations: {
          "idle-down": [[1, 0]],
          "idle-left": [[1, 1]],
          "idle-right": [[1, 2]],
          "idle-up": [[1, 3]],
          "walk-down": [
            [0, 0],
            [1, 0],
            [0, 0],
            [2, 0],
          ],
          "walk-left": [
            [0, 1],
            [1, 1],
            [0, 1],
            [2, 1],
          ],
          "walk-right": [
            [0, 2],
            [1, 2],
            [0, 2],
            [2, 2],
          ],
          "walk-up": [
            [0, 3],
            [1, 3],
            [0, 3],
            [2, 3],
          ],
        },
      }),
      // npcA: new Person({
      //   src: "./assets/img/characters/Other Charact/tile001.png",
      //   x: utils.withGrid(12),
      //   y: utils.withGrid(13),
      //   pixelSize: 32,
      //   animations: {
      //     "idle-down": [[1, 0]],
      //     "idle-left": [[1, 1]],
      //     "idle-right": [[1, 2]],
      //     "idle-up": [[1, 3]],
      //     "walk-down": [
      //       [0, 0],
      //       [1, 0],
      //       [0, 0],
      //       [2, 0],
      //     ],
      //     "walk-left": [
      //       [0, 1],
      //       [1, 1],
      //       [0, 1],
      //       [2, 1],
      //     ],
      //     "walk-right": [
      //       [0, 2],
      //       [1, 2],
      //       [0, 2],
      //       [2, 2],
      //     ],
      //     "walk-up": [
      //       [0, 3],
      //       [1, 3],
      //       [0, 3],
      //       [2, 3],
      //     ],
      //   },
      // }),
    },
  },
};
