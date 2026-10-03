export type Faq = {
  question: string;
  answer: string;
};

export type ContentSubsection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: ContentSubsection[];
  // Show a short book / WhatsApp / call prompt after this section.
  cta?: boolean;
};

export type Fact = {
  label: string;
  value: string;
};

export type LinkItem = {
  label: string;
  href: string;
  description?: string;
};
