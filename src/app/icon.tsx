import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: the DJ monogram geometry on the near-black canvas. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08070a",
        }}
      >
        <svg
          width="46"
          height="37"
          viewBox="0 0 40 32"
          fill="none"
          stroke="#edeae0"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5.5H10A10.5 10.5 0 0 1 10 26.5H4Z" />
          <path d="M36 5.5V19A7.5 7.5 0 0 1 28.5 26.5H27" />
        </svg>
      </div>
    ),
    size
  );
}
