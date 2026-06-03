export default function loadBackgroudImages() {
  let backgroudImages = document.querySelectorAll("[data-background]");

  if (backgroudImages.length > 0) {
    backgroudImages.forEach((element) => {
      const htmlElement = element as HTMLElement;
      let image = htmlElement.dataset.background;
      htmlElement.style.backgroundImage = `url('${image}')`;
    });
  }
}
