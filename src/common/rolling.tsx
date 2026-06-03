"use client";
import React, { useEffect, useRef } from "react";

const RollingText = ({ text = "home" }) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (const letter of text) {
      const span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }

    element.innerHTML = ""; // Clear previous content
    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));

    element.addEventListener("mouseover", () => {
      element.classList.remove("play");
    });
  }, [text]);

  return <span className="rolling-text" ref={elementRef} />;
};

export default RollingText;
