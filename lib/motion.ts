export type RevealDirection = "up" | "left" | "right" | "none";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function revealMotion(
  direction: RevealDirection = "up",
  delay = 0,
  reducedMotion = false,
  distance = 28,
) {
  const offset = {
    up: { x: 0, y: distance },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return {
    initial: reducedMotion
      ? { opacity: 1, x: 0, y: 0 }
      : { opacity: 0, ...offset },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.18, margin: "0px 0px -8% 0px" },
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.65, delay, ease: easeOut },
  };
}
