// The Ether Dream firmware uses signed 16-bit integers for the xy resolution, ranging from -32768 to 32767.
// Source: https://github.com/j4cbo/j4cDAC/blob/e592ebcb7c9b6fb521be2005f4b85de54bc04f0f/common/protocol.h
export const RESOLUTION = 65535;

export function relativeToPosition(n: number) {
  return Math.floor((0.5 - n) * RESOLUTION);
}

export function relativeToColor(color: number) {
  return Math.floor(RESOLUTION * color);
}
