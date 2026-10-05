import ContentBlocks from "@/components/ui/ContentBlocks";
import type { ContentSection } from "@/lib/content/types";

type HubArticleProps = {
  sections: ContentSection[];
};

export default function HubArticle({ sections }: HubArticleProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <ContentBlocks sections={sections} />
      </div>
    </section>
  );
}
