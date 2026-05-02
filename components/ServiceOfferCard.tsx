import type { ClientOffer } from "@/content/services";

type ServiceOfferCardProps = {
  offer: ClientOffer;
};

export function ServiceOfferCard({ offer }: ServiceOfferCardProps) {
  return (
    <article className="glass-card p-6">
      <h3 className="text-xl font-semibold text-white">{offer.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{offer.problemSolved}</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-white">What the client gets</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
            {offer.whatClientGets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Input needed</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
            {offer.inputNeeded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
        <p><span className="font-semibold text-white">Delivery:</span> {offer.deliveryFormat}</p>
        <p className="mt-2"><span className="font-semibold text-white">CTA:</span> {offer.cta}</p>
      </div>
    </article>
  );
}
