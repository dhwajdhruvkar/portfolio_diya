/**
 * WCAG contrast check for the palette in src/styles/globals.css.
 * Run with: node scripts/check-contrast.mjs
 */

const tokens = {
  bg: "#08070a",
  bgDeep: "#000000",
  bg2: "#101015",
  fg: "#edeae0",
  fgDim: "#9a968d",
  line: "#23222a",
  accent: "#e4381f",
  accent2: "#ff5a3c",
};

function channel(value) {
  const srgb = value / 255;
  return srgb <= 0.03928
    ? srgb / 12.92
    : Math.pow((srgb + 0.055) / 1.055, 2.4);
}

function luminance(hex) {
  const int = parseInt(hex.slice(1), 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function ratio(a, b) {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

/** `large` marks text at or above 18.66px bold / 24px regular (AA needs 3:1). */
const pairs = [
  ["fg on bg", tokens.fg, tokens.bg, false],
  ["fg on bgDeep", tokens.fg, tokens.bgDeep, false],
  ["fg on bg2", tokens.fg, tokens.bg2, false],
  ["fgDim on bg", tokens.fgDim, tokens.bg, false],
  ["fgDim on bgDeep", tokens.fgDim, tokens.bgDeep, false],
  ["fgDim on bg2", tokens.fgDim, tokens.bg2, false],
  ["accent2 on bg (small accent text)", tokens.accent2, tokens.bg, false],
  ["accent2 on bgDeep", tokens.accent2, tokens.bgDeep, false],
  ["accent on bg (small text)", tokens.accent, tokens.bg, false],
  ["accent on bg (display type)", tokens.accent, tokens.bg, true],
  ["accent on bgDeep (display type)", tokens.accent, tokens.bgDeep, true],
  ["bg on accent (hover fill, selection)", tokens.bg, tokens.accent, false],
];

let failures = 0;

for (const [label, fore, back, large] of pairs) {
  const value = ratio(fore, back);
  const threshold = large ? 3 : 4.5;
  const pass = value >= threshold;
  if (!pass) failures += 1;
  const verdict = pass ? "PASS" : "FAIL";
  console.log(
    `${verdict}  ${value.toFixed(2)}:1  (needs ${threshold}:1)  ${label}`
  );
}

console.log(
  failures === 0
    ? "\nAll pairs meet WCAG AA for their intended use."
    : `\n${failures} pair(s) below AA — check src/styles/globals.css.`
);

process.exit(failures === 0 ? 0 : 1);
