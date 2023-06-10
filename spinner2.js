const animationFrames = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
const delay = 200

const animate = (frames, index) => {
  setTimeout(() => {
    process.stdout.write(frames[index % frames.length]);
    if (index < frames.length - 1) animate(frames, index + 1);
  }, delay);
};

animate(animationFrames, 0);