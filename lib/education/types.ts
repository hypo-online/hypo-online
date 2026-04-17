export type EducationSection = {
  h2: string;
  paragraphs: string[];
};

export type EducationArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  sections: EducationSection[];
  takeaways?: string[];
  /** Odkazy na související články (slugy). */
  relatedSlugs?: string[];
  /** Datum poslední obsahové revize (YYYY-MM-DD). */
  updatedAt?: string;
};
