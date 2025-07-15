import {
  Book,
  ComplexSolution,
  Hero,
  Info,
  Products,
  Quote,
  Reasons,
  Reviews,
  Steps,
} from './components';

export default function MarketingConsultingPage() {
  return (
    <main>
      <Hero />
      <Info />
      <Quote />
      <Products />
      <ComplexSolution />
      <Steps />
      <Reasons />
      <Reviews />
      <Book />
    </main>
  );
}
