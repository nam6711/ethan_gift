class Menu {
  constructor(overlay, pos, dimensions) {
    this.overlay = overlay; // bgrnd img
    this.pos = pos; // {x,y}
    this.dimensions = dimensions; // {width, height}
  }

  display() {
    image(
      this.overlay,
      this.pos.x,
      this.pos.y,
      this.dimensions.width,
      this.dimensions.height
    );
  }

  is_inside() {
    return (mouseX > this.pos.x && mouseX < this.pos.x + this.dimensions.width &&
      mouseY > this.pos.y && mouseY < this.pos.y + this.dimensions.height);
  }

  mouse_clicked() {
    
  }
}
