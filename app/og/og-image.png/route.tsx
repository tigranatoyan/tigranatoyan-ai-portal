import { ImageResponse } from "next/og";

export async function GET() {
  const img = new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#05070d",
          color: "#f7fafc",
          fontFamily: "Arial, sans-serif",
          padding: 70,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "2px solid #41526a",
            borderRadius: 36,
            padding: "56px 72px",
            background: "#080c16",
          }}
        >
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>Tigran Atoyan</div>
          <div style={{ marginTop: 20, fontSize: 40, fontWeight: 700, color: "#8ddcff" }}>
            AI Systems & Operations Builder
          </div>
          <div style={{ marginTop: 42, display: "flex", gap: 18, flexWrap: "wrap" }}>
            {["BreadCost", "The.Director", "SystemForge", "Project Semantic Engine"].map((label) => (
              <div
                key={label}
                style={{
                  border: "1px solid #465e79",
                  borderRadius: 999,
                  padding: "12px 22px",
                  background: "#121b2a",
                  fontSize: 25,
                  color: "#e8eef6",
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 52, fontSize: 24, color: "#9aa7b9" }}>
            Proof-first portal for business software, dashboards, and agentic workflows.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
  // ImageResponse is already a Response — return it directly
  return img;
}
