class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 0;
    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };

    this.isPlayerControlled = config.isPlayerControlled || false;
  }

  update(state) {
    this.updatePosition(state);
    this.updateSprite(state);

    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining === 0 &&
      state.arrow
    ) {
      this.direction = state.arrow;
      this.movingProgressRemaining = 32;
    }
  }

  updatePosition(state) {
    const isSpaceTaken = state.map.isSpaceTaken(this.x, this.y, this.direction);
    if (this.movingProgressRemaining > 0) {
      this.movingProgressRemaining -= 1;

      if (!isSpaceTaken) {
        const [property, change] = this.directionUpdate[this.direction];
        this[property] += change;
      }
    }
  }

  updateSprite(state) {
    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining === 0 &&
      !state.arrow
    ) {
      this.sprite.setSprite("idle-" + this.direction);
    }

    if (this.movingProgressRemaining > 0 && state.arrow) {
      this.sprite.setSprite("walk-" + this.direction);
      return;
    }
  }
}
