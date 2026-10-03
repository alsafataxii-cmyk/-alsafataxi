import Link from "next/link";
import { createAutoLinker, type TextPart } from "@/lib/content/autolink";
import type { ContentSection } from "@/lib/content/types";

type ContentBlocksProps = {
  intro?: string;
  sections: ContentSection[];
  path?: string;
};

function renderParts(parts: TextPart[]) {
  return parts.map((part, index) =>
    typeof part === "string" ? (
      part
    ) : (
      <Link
        key={`${part.href}-${index}`}
        href={part.href}
        className="font-medium text-brand-primary underline underline-offset-2 hover:text-brand-gold"
      >
        {part.text}
      </Link>
    ),
  );
}

export default function ContentBlocks({ intro, sections, path }: ContentBlocksProps) {
  const link = createAutoLinker(path);

  return (
    <div className="flex flex-col gap-10">
      {intro ? (
        <p className="text-lg leading-relaxed text-brand-dark/80">{renderParts(link(intro))}</p>
      ) : null}

      {sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-brand-dark">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-brand-dark/70">
              {renderParts(link(paragraph))}
            </p>
          ))}
          {section.bullets ? (
            <ul className="flex flex-col gap-2 pl-1">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-base leading-relaxed text-brand-dark/70"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-gold"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
