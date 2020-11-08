import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from '../../data/shop.data';

const Shop = () => {
  return (
    <section className="shop">
      {
        SHOP_DATA.map((collection) => (
          <CollectionPreview key={collection.id} collection={collection} />
        ))
      }
    </section>
  );
};

export default Shop;
