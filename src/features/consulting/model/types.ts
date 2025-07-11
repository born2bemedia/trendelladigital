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

export type ConsultingDetailed = Pick<Consulting, 'description' | 'includes'>;
