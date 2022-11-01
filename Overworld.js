class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 640;
    this.canvas.height = 480;
    this.map = null;
  }

  startGame() {
    const step = () => {
      //Clear canvas before drawing
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const cameraPerson = this.map.gameObjects.hero;
      //Draw map in the Screen
      this.map.drawMap(this.context, cameraPerson);

      //Draw GameObjects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
          map: this.map,
        });
        object.sprite.draw(this.context, cameraPerson);
      });
      this.map.drawForeground(this.context, cameraPerson);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.New_Town);
    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGame();
  }
}
