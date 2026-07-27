import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          width="112"
          height="90"
          viewBox="0 0 40 32"
          fill="none"
          stroke="#edeae0"
          strokeWidth={2.6}
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
