export type Consulting = {
  name: string;
  subtitle: string;
  includeLabel: string;
  excerpt: string;
  description: string;
  label: string;
  buttonLabel: string;
  includes: string[];
};

export type ComplexSolution = {
  name: string;
  description: string;
  bestFor: string[];
  includes: string[];
  price: number;
};

export type SolutionType = 'cheap' | 'moderate' | 'expensive';
export type ConsultingDetailed = Pick<Consulting, 'description' | 'includes'>;
