import React from 'react';

interface Props {
  id: string;
  title: string;
  description: string;
}
import styles from './FavoriteItem.module.css';

const FavItem: React.FC<Props> = ({ id, title, description }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FavItem;
