import { toPng } from "html-to-image";

export async function captureElementAsPng(element: HTMLElement) {
  return toPng(element, {
    cacheBust: true,
    pixelRatio: 2,
    backgroundColor: "#09090b",
  });
}

export function downloadPng(dataUrl: string, fileName: string) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = fileName;
  link.click();
}
