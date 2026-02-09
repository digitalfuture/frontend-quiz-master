export interface Option {
  id: string;
  text: {
    en: string;
    ru: string;
  };
}

export interface Question {
  id: number;
  question: {
    en: string;
    ru: string;
  };
  options: Option[];
  correctOptionId: string;
  category: string;
  section: string;
  topic: string;
}
