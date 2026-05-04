import { assetPath } from "@/lib/assetPath";

type PlaceholderAssetProps = {
  title: string;
  path?: string;
  note?: string;
};

const imagePattern = /\.(png|jpe?g|webp|gif|svg)$/i;

export function PlaceholderAsset({ title, path, note }: PlaceholderAssetProps) {
  const isImage = Boolean(path && imagePattern.test(path));

  if (path && isImage) {
    return (
      <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-soft">
        <img
          src={assetPath(path)}
          alt={title}
          className="h-auto w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-t border-white/10 p-4 text-sm text-slate-300">
          <p className="font-semibold text-slate-100">{title}</p>
          {note ? <p className="mt-2 text-slate-400">{note}</p> : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-slate-600 bg-slate-950/60 p-5 text-sm text-slate-300">
      <p className="font-semibold text-slate-100">{title}</p>
      {path ? <p className="mt-2 break-words font-mono text-xs text-signal">{path}</p> : null}
      <p className="mt-3 text-slate-400">{note ?? "Public-safe proof is shown where available. Deeper evidence can be shared after sanitization or on request."}</p>
    </div>
  );
}

