import React from 'react';

import { useStore } from '../../hooks/hooks-store/store';
import styles from './ProductItem.module.css';

interface Props {
  id: number;
  title: string;
  description: string;
  isFav: boolean;
}

const ProductItem: React.FC<Props> = React.memo(
  ({ id, title, description, isFav }) => {
    const dispatch = useStore()[1];

    const toggleFavHandler = () => {
      // toggleFav(props.id);
      dispatch('TOGGLE_FAV', id);
    };

    return (
      <div style={{ marginBottom: '1rem' }}>
        <div className={styles.productItem}>
          <h2 className={isFav ? 'styles.isFav' : ''}>{title}</h2>
          <p>{description}</p>
          <button
            className={!isFav ? 'styles.buttonOutline' : ''}
            onClick={toggleFavHandler}
          >
            {isFav ? 'Un-Favorite' : 'Favorite'}
          </button>
        </div>
      </div>
    );
  }
);

export default ProductItem;
