import React from 'react';
import Link from 'next/link';

import styles from './FavNavigation.module.css';

const FavNavigation = () => {
  return (
    <header className={styles.mainHeader}>
      <nav>
        <ul>
          <li>
            <Link href="/fav/products">All Products</Link>
          </li>
          <li>
            <Link href="/fav/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default FavNavigation;
