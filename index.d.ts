declare module "lexicon-data" {
  interface constraints {
    complex: string[];
    physical: string[];
    simple: string[];
  }
  
  type topics = string[][];
}