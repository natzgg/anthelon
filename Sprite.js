class Sprite {
  constructor(config) {
    //Setup the Image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // Configure animation & initial state
    this.animations = config.animations || {
      idle: [[1, 0]],
    };

    this.pixelSize = config.pixelSize;
    //Animations
    this.currentAnimation = "idle-down"; //config.currentAnimation || "idle";
    this.currentAnimationFrame = 0;
    this.progressAnimationFrameLimit = this.progressAnimationFrameLimit || 32;
    this.progressAnimationFrame = this.progressAnimationFrameLimit;

    //Reference the gameObject
    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setSprite(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.progressAnimationFrame = this.progressAnimationFrame;
    }
  }

  updateAnimations() {
    //Downtick the frame progress
    if (this.progressAnimationFrame > 0) {
      this.progressAnimationFrame -= 1;
      return;
    }

    //Reset the counter
    this.progressAnimationFrame = this.progressAnimationFrameLimit;

    //Uptick the frame progress
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(context, cameraPerson) {
    const [frameX, frameY] = this.frame;
    this.isLoaded &&
      context.drawImage(
        this.image,
        frameX * this.pixelSize, // left cut
        frameY * this.pixelSize, // top cut
        32, //width of cut
        32, //height of cut
        this.gameObject.x + utils.withGrid(9.5) - cameraPerson.x, // actual position in map
        this.gameObject.y + utils.withGrid(7.5) - cameraPerson.y, // actual position in map
        32, // size of hero to be drawn -width
        32 // size of hero to be drawn -height
      );
    this.updateAnimations();
  }
}
