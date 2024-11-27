import * as React from 'react';
import PageWrapper from '../layout/PageWrapper';
import ProductHero from '../layout/ProductHero';

function LandingPage() {
  return (
    <React.Fragment>
      <PageWrapper text='Star Wars search app. ' component='header' />
      <ProductHero />
      <PageWrapper
        text='“Always pass on what you have learned.” — Yoda'
        component='footer'
      />
    </React.Fragment>
  );
}

export default LandingPage;
