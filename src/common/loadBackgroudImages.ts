export default function loadBackgroudImages() {
  const backgroudImages = document.querySelectorAll("[data-background]");

  if (backgroudImages.length > 0) {
    backgroudImages.forEach((element) => {
      const htmlElement = element as HTMLElement;
      const image = htmlElement.dataset.background;
      htmlElement.style.backgroundImage = `url('${image}')`;
    });
  }
}
