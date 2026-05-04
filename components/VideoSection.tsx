import { PlaceholderAsset } from "@/components/PlaceholderAsset";
import { SectionHeader } from "@/components/SectionHeader";

type VideoSectionProps = {
  title?: string;
  description?: string;
};

export function VideoSection({
  title = "Proof walkthrough path",
  description = "Start with the proof assets below: BreadCost, The.Director, SystemForge, and Project Semantic Engine. A narrated walkthrough can be added later after all private material stays sanitized."
}: VideoSectionProps) {
  return (
    <section className="section-shell">
      <SectionHeader eyebrow="Video" title={title} description={description} />
      <div className="mt-8 aspect-video rounded-3xl border border-dashed border-slate-600 bg-[radial-gradient(circle_at_center,rgba(141,220,255,0.16),rgba(5,7,13,0.9)_45%)] p-6 shadow-executive">
        <div className="flex h-full items-center justify-center text-center">
          <PlaceholderAsset
            title="Proof inspection starts with the assets below."
            path="BreadCost · The.Director · SystemForge · Project Semantic Engine"
            note="The public portal stays useful without exposing raw SDIC, private customer material, or unsanitized proof."
          />
        </div>
      </div>
    </section>
  );
}
