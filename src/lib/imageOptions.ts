export interface ImageOption {
  value: string;
  label: string;
}

export interface ImageOptions {
  backgroundImages: ImageOption[];
  patternImages: ImageOption[];
  allImages: ImageOption[];
}

// Utility function to get available background and pattern images
export const getImageOptions = (): ImageOptions => {
  const backgroundImages: ImageOption[] = [
    { value: "/assets/imgs/background/1.jpg", label: "Background 1" },
    { value: "/assets/imgs/background/b1.jpg", label: "Background B1" },
    { value: "/assets/imgs/background/b2.jpg", label: "Background B2" },
    { value: "/assets/imgs/background/bg.jpg", label: "Background BG" },
    { value: "/assets/imgs/background/bg1.jpg", label: "Background BG1" },
    { value: "/assets/imgs/background/bg2.jpg", label: "Background BG2" },
    { value: "/assets/imgs/background/bg3.jpg", label: "Background BG3" },
    { value: "/assets/imgs/background/bg4.jpg", label: "Background BG4" },
    { value: "/assets/imgs/background/bg5.jpg", label: "Background BG5" },
  ];

  const patternImages: ImageOption[] = [
    { value: "/assets/imgs/patterns/1.png", label: "Pattern 1" },
    { value: "/assets/imgs/patterns/1.svg", label: "Pattern 1 SVG" },
    {
      value: "/assets/imgs/patterns/abstact-BG.png",
      label: "Abstract Background",
    },
    { value: "/assets/imgs/patterns/asx7.png", label: "Pattern ASX7" },
    {
      value: "/assets/imgs/patterns/bg-lines-1.svg",
      label: "Background Lines 1",
    },
    {
      value: "/assets/imgs/patterns/bg-pattern.png",
      label: "Background Pattern",
    },
    { value: "/assets/imgs/patterns/blur1.png", label: "Blur Pattern" },
    { value: "/assets/imgs/patterns/dots.png", label: "Dots Pattern" },
    { value: "/assets/imgs/patterns/dots2.png", label: "Dots Pattern 2" },
    { value: "/assets/imgs/patterns/graph.png", label: "Graph Pattern" },
    {
      value: "/assets/imgs/patterns/home-hero-lines-2.svg",
      label: "Home Hero Lines 2",
    },
    {
      value: "/assets/imgs/patterns/home-inspiration-lines.svg",
      label: "Home Inspiration Lines",
    },
    { value: "/assets/imgs/patterns/lines.png", label: "Lines Pattern" },
    { value: "/assets/imgs/patterns/lines1.png", label: "Lines Pattern 1" },
    { value: "/assets/imgs/patterns/noise.png", label: "Noise Pattern" },
    { value: "/assets/imgs/patterns/noise1.png", label: "Noise Pattern 1" },
    { value: "/assets/imgs/patterns/pat1.png", label: "Pattern 1" },
    { value: "/assets/imgs/patterns/pat2.png", label: "Pattern 2" },
    { value: "/assets/imgs/patterns/patt.svg", label: "Pattern SVG" },
    { value: "/assets/imgs/patterns/pattern.png", label: "Pattern" },
    { value: "/assets/imgs/patterns/pattern.svg", label: "Pattern SVG" },
    { value: "/assets/imgs/patterns/pattern2.png", label: "Pattern 2" },
    { value: "/assets/imgs/patterns/pattern3.png", label: "Pattern 3" },
  ];

  return {
    backgroundImages,
    patternImages,
    allImages: [...backgroundImages, ...patternImages],
  };
};

// Helper function to get image label by value
export const getImageLabel = (value: string): string => {
  const options = getImageOptions();
  const allImages = [...options.backgroundImages, ...options.patternImages];
  const image = allImages.find((img) => img.value === value);
  return image ? image.label : value;
};
