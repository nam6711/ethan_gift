class OtherProvince extends Frame {
  constructor(pos, dimensions) {
    super(1, "other_province", pos, dimensions);
    this.load_frame();
  }

  load_frame() {
    this.frames[this.current_frame] = loadImage("./media/other_province.jpg", () => super.check_if_loaded(this));
  }

  display() {
    super.display();
  }
}
