export type AutoLinkRule = { pattern: string; href: string };

// Contextual links added to body copy. Each target is linked at most once per page, on its
// first mention, and never from its own page. Longer phrases come first so they win.
const rules: AutoLinkRule[] = [
  { pattern: "Prince Mohammad bin Abdulaziz International Airport", href: "/airports/madinah-airport" },
  { pattern: "King Abdulaziz International Airport", href: "/airports/jeddah-airport" },
  { pattern: "Taif International Airport", href: "/airports/taif-airport" },
  { pattern: "Umrah transportation", href: "/umrah-transportation" },
  { pattern: "business transportation", href: "/services/business-transportation" },
  { pattern: "airport transfers?", href: "/services/airport-transfers" },
  { pattern: "intercity transfers?", href: "/services/intercity-transfers" },
  { pattern: "Ziyarat tours?", href: "/services/ziyarat-tours" },
  { pattern: "private chauffeur", href: "/services/private-chauffeur" },
  { pattern: "hotel transfers?", href: "/services/hotel-transfers" },
  { pattern: "city taxi", href: "/services/city-taxi" },
  { pattern: "Jeddah Airport", href: "/airports/jeddah-airport" },
  { pattern: "Madinah Airport", href: "/airports/madinah-airport" },
  { pattern: "Taif Airport", href: "/airports/taif-airport" },
];

const MAX_LINKS_PER_PAGE = 6;

export type TextPart = string | { text: string; href: string };

export function createAutoLinker(currentPath?: string) {
  const used = new Set<string>(currentPath ? [currentPath] : []);
  let count = 0;

  return function link(text: string): TextPart[] {
    const parts: TextPart[] = [];
    let rest = text;

    while (rest && count < MAX_LINKS_PER_PAGE) {
      let best: { index: number; length: number; href: string } | null = null;
      for (const rule of rules) {
        if (used.has(rule.href)) continue;
        const match = new RegExp(`\\b${rule.pattern}\\b`, "i").exec(rest);
        if (match && (!best || match.index < best.index)) {
          best = { index: match.index, length: match[0].length, href: rule.href };
        }
      }
      if (!best) break;

      if (best.index > 0) parts.push(rest.slice(0, best.index));
      parts.push({ text: rest.slice(best.index, best.index + best.length), href: best.href });
      used.add(best.href);
      count += 1;
      rest = rest.slice(best.index + best.length);
    }

    if (rest) parts.push(rest);
    return parts;
  };
}
