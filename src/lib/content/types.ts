export type Faq = {
  question: string;
  answer: string;
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
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
