import type { EmployerRole } from "@/content/services";

type RoleFitCardProps = {
  role: EmployerRole;
};

export function RoleFitCard({ role }: RoleFitCardProps) {
  return (
    <article className="glass-card p-6">
      <h3 className="text-xl font-semibold text-white">{role.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{role.whyFit}</p>
      <div className="mt-4">
        <p className="text-sm font-semibold text-white">Relevant proof</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {role.proofAssets.map((asset) => (
            <span key={asset} className="rounded-full bg-signal/10 px-3 py-1 text-xs text-signal">
              {asset}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-white">Skills</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">{role.skills.join(" · ")}</p>
      </div>
      <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
        Interview angle: {role.interviewAngle}
      </p>
    </article>
  );
}
