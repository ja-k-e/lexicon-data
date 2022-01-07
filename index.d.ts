declare module "lexicon-data";

export = Data;

interface Data {
  constraints: {
    simple: string[];
    complex: string[];
    physical: string[];
  };
  topics: string[][];
}