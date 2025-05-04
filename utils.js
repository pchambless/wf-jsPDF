// utils.js
let loopIndex = 0;
let pageHeight = 0;

export const getLoopIndex = () => loopIndex;

export const incrementLoopIndex = () => {
  loopIndex += 1;
  return loopIndex;
};

export const resetLoopIndex = () => {
  loopIndex = 0;
};

export const setPageHeight = (orientation) => {
  const letterSize = { width: 8.5 * 72, height: 11 * 72 }; // Letter size in points (1 inch = 72 points)
  if (orientation === 'l') {
    pageHeight = letterSize.width;
  } else {
    pageHeight = letterSize.height;
  }
};

export const getPageHeight = () => pageHeight;

