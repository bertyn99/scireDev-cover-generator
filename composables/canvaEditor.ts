export const useCanvaEditor = (
  canva: Ref<HTMLCanvasElement | null>,
  bg: string[]
) => {
  console.log("Using canvas");
  console.log(canva);
  const ctx = computed(() => canva.value?.getContext("2d"));
  const drawBackground = (bg: string[]) => {
    if (ctx.value) {
      console.log("drawBackground", bg);
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

  const setup = () => {
    console.log("setup");
    drawBackground(bg);
  };

  setup();
  return;
};
