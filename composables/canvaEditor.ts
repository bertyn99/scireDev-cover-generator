export const useCanvaEditor = (
  canva: Ref<HTMLCanvasElement | null>,
  bg: Ref<string[]>
) => {
  const ctx = computed(() => canva.value?.getContext("2d"));
  const drawBackground = (bg: string[]) => {
    if (ctx.value) {
      console.log("drawBackground", bg[0], bg[1]);
      // add linear gradient
      let grd = ctx.value.createLinearGradient(
        0,
        0,
        canva.value!.width,
        canva.value!.height
      );
      // light blue
      grd.addColorStop(0, bg[0]);
      // dark blue
      grd.addColorStop(1, bg[1]);
      ctx.value.fillStyle = grd;
      ctx.value.fillRect(0, 0, canva.value!.width, canva.value!.height);
    }
  };

  watch(bg, (newBg) => {
    console.log("watch bg", newBg);
    drawBackground(newBg);
  });
  const setup = () => {
    console.log("setup");
    drawBackground(bg.value);
  };

  setup();
  return;
};
