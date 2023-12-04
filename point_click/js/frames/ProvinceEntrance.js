class ProvinceEntrance extends Frame {
  constructor(pos, dimensions) {
    super(1, "entrance", pos, dimensions)
    this.load_frame();
  }

  load_frame() {
    this.frames[this.current_frame] = loadImage("./media/province.jpg", () => super.check_if_loaded(this));
  }

  display() {
    super.display();
  }

  mouse_clicked() {
    if (mouseX > width * .75)
      frame = new OtherProvince(this.pos, this.dimensions);
  }
}
