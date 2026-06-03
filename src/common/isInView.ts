import { InViewOptions } from "@/types";

export default function isInView(options: InViewOptions) {
  if (!options.selector || !options.callback) return;

  if (options.isElements) {
    document.querySelectorAll(options.selector).forEach((element) => {
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) options.callback(entries[0].target);
        else {
          if (options.whenOutOfView) options.whenOutOfView(entries[0].target);
        }
      }).observe(element);
    });
  } else {
    const element = document.querySelector(options.selector);
    if (element) {
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) options.callback(entries[0].target);
        else {
          if (options.whenOutOfView) options.whenOutOfView(entries[0].target);
        }
      }).observe(element);
    }
  }
}
