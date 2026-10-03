import Link from "next/link";
import type { ReactNode } from "react";

// Body copy supports inline links written as [anchor text](/path).
const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function stripLinks(text: string): string {
  return text.replace(LINK_PATTERN, "$1");
}

export function RichText({ text }: { text: string }): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    nodes.push(
      <Link
        key={key++}
        href={match[2]}
        className="font-medium text-brand-primary underline underline-offset-2 transition-colors hover:text-brand-gold"
      >
        {match[1]}
      </Link>,
    );
    last = index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
