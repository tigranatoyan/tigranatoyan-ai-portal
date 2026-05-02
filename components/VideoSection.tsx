import { PlaceholderAsset } from "@/components/PlaceholderAsset";
import { SectionHeader } from "@/components/SectionHeader";

type VideoSectionProps = {
  title?: string;
  description?: string;
};

export function VideoSection({
  title = "Demo video placeholder",
  description = "The homepage video will introduce Tigran, show BreadCost and The.Director, and end with a hiring/conversation CTA."
}: VideoSectionProps) {
  return (
    <section className="section-shell">
      <SectionHeader eyebrow="Video" title={title} description={description} />
      <div className="mt-8 aspect-video rounded-3xl border border-dashed border-slate-600 bg-[radial-gradient(circle_at_center,rgba(141,220,255,0.16),rgba(5,7,13,0.9)_45%)] p-6 shadow-executive">
        <div className="flex h-full items-center justify-center text-center">
          <PlaceholderAsset
            title="Hero video not added yet"
            path="/public/videos/hero-video-link.txt or external embed URL"
            note="Phase 2 intentionally uses this clean placeholder. Replace in Phase 3 after the walkthrough is recorded or hosted."
          />
        </div>
      </div>
    </section>
  );
}
