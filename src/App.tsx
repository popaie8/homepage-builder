import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/common';
import { SEOHelmet } from './components/common/SEOHelmet';
import {
  HeroSection,
  ServiceSection,
  PricingSection,
  PortfolioSection,
  FAQSection,
  CompanySection,
  ContactSection
} from './components/sections';

function App() {
  return (
    <HelmetProvider>
      <SEOHelmet />
      <Layout>
        <HeroSection />
        <ServiceSection />
        <PricingSection />
        <PortfolioSection />
        <FAQSection />
        <CompanySection />
        <ContactSection />
      </Layout>
    </HelmetProvider>
  );
}

export default App;
