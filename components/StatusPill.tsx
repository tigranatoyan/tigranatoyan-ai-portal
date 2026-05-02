type StatusPillProps = {
  status: string;
};

const labelMap: Record<string, string> = {
  "proof-ready": "Proof ready",
  "needs-assets": "Needs assets",
  "private-proof": "Private proof",
  placeholder: "Placeholder",
  missing: "Missing",
  ready: "Ready"
};

export function StatusPill({ status }: StatusPillProps) {
  // Don't surface internal "needs-assets" state to visitors — it's an authoring flag, not a proof label
  if (status === "needs-assets") return null;

  const label = labelMap[status] ?? status;
  return (
    <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
      {label}
    </span>
  );
}
