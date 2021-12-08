import React, { useContext } from 'react';

import FavItem from '../../components/favorites-related/FavItem';
import { useStore } from '../../hooks/hooks-store/store';
import FavNavigation from '../../components/favorites-related/FavNavigation';

const Favorites: React.FC = () => {
  const state = useStore()[0];

  const favoriteProducts = state.products.filter((p: any) => p.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul>
        {favoriteProducts.map((prod: any) => (
          <FavItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return (
    <>
      <FavNavigation />
      {content}
    </>
  );
};

export default Favorites;
