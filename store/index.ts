import { defineStore } from "pinia";

export const useCanvasStore = defineStore("canva", () => {
  const height = ref(1080);
  const width = ref(1920);
  const background = ref({ name: "reset", color: ["#ffffff", "#ffffff"] });
  const content = ref("");

  function setHeight(value: number) {
    height.value = value;
  }
  function setWidth(value: number) {
    width.value = value;
  }
  function setDimension(height: number, width: number) {
    setHeight(height);
    setWidth(width);
  }
  function setBackground(bg: { name: string; color: string[] }) {
    background.value = bg;
  }

  return {
    height,
    width,
    background,
    content,
    setDimension,
    setBackground,
  };
});
