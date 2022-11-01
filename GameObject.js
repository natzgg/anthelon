class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      pixelSize: config.pixelSize,
      animations: config.animations,
      gameObject: this,
      src: config.src || "./assets/img/characters/Cloud/cloud.png",
    });

  }

  update() {}
}
