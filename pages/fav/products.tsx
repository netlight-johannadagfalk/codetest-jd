import ProductItem from '../../components/favorites-related/ProductItem';
import { useStore } from '../../hooks/hooks-store/store';
import FavNavigation from '../../components/favorites-related/FavNavigation';

const Products: React.FC = () => {
  const state = useStore()[0];

  return (
    <>
      <FavNavigation />
      <ul>
        {state.products.map((prod: any) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
            isFav={prod.isFavorite}
          />
        ))}
      </ul>
    </>
  );
};

export default Products;
