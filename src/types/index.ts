export type ITodoType = {
  id: number;
  title: string;
  description: string
  completed: boolean;
};

export type ILanguageType = {
  lang: string;
  setLang: (lang: string) => void;
};
