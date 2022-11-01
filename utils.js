const utils = {
  withGrid(n) {
    return n * 32;
  },

  asGridCoords(x, y) {
    return `${x * 32},${y * 32}`;
  },

  convertCollision(collisions) {
    let collisionsRows = [];
    let collisionsData = {};
    for (let i = 0; i < collisions.data.length; i + 35) {
      collisionsRows.push(collisions.data.splice(i, i + 35));
    }

    collisionsRows.forEach((row, i) => {
      row.forEach((data, j) => {
        if (data === 257) {
          Object.assign(collisionsData, { [utils.asGridCoords(j, i)]: true });
        }
      });
    });

    return collisionsData;
  },

  nextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;
    const pixelSize = 32;

    if (direction === "left") {
      x -= pixelSize;
    } else if (direction === "right") {
      x += pixelSize;
    } else if (direction === "up") {
      y -= pixelSize;
    } else if (direction === "down") {
      y += pixelSize;
    }

    return { x, y };
  },
};
