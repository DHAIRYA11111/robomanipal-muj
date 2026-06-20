export type Paper = {
  slug: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  area: string;
  abstractPreview: string;
  abstract: string[];
  keywords: string[];
  pdf: string;
  doi?: string;
};

export const PAPERS: Paper[] = [];

export function getPaper(slug: string): Paper | undefined {
  return PAPERS.find((paper) => paper.slug === slug);
}
