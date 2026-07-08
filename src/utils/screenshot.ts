import { toPng } from "html-to-image";

export async function captureElementAsPng(element: HTMLElement) {
  return toPng(element, {
    cacheBust: true,
    pixelRatio: 2,
  });
}
