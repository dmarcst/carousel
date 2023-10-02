Draggable.create(".circular-carousel-slider", {
  type: "rotation",
  inertia: true,
  minimumMovement: 0,
  snap: function (endValue) {
    var step = 10;
    return Math.round(endValue / step) * step;
  }
});