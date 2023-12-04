class Frame {
  constructor(media_count, current_frame, pos, dimensions) {
    this.frames = {}; // to be loaded by actual instantiation
    this.current_frame = current_frame;
    this.pos = pos; // {x,y}
    this.dimensions = dimensions; // {width, height}

    // tells if it is loaded yet
    this.loaded = false;
    this.loaded_count = 0;
    this.media_count = media_count;
  }

  check_if_loaded(context) {
    context.loaded_count++;
    context.loaded = context.loaded_count == context.media_count;
  }

  load_frame() {
  }

  display() {
    if (!this.loaded)
      return;

    image(
      this.frames[this.current_frame],
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
