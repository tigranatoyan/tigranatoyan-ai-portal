type PlaceholderAssetProps = {
  title: string;
  path?: string;
  note?: string;
};

export function PlaceholderAsset({ title, path, note }: PlaceholderAssetProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-600 bg-slate-950/60 p-5 text-sm text-slate-300">
      <p className="font-semibold text-slate-100">{title}</p>
      {path ? <p className="mt-2 break-words font-mono text-xs text-signal">{path}</p> : null}
      <p className="mt-3 text-slate-400">{note ?? "Evidence asset not added yet. Placeholder is intentional for Phase 2."}</p>
    </div>
  );
}
