import * as React from 'react';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200';

function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
        opacity: '0.9',
      }}
    />
  );
}

export default ProductHero;
