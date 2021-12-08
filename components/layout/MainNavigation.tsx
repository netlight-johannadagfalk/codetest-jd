import React from 'react';
import Link from 'next/link';
import classes from '../layout/MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Practise Project</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/strips">All Strips</Link>
          </li>
          <li>
            <Link href="/fav">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
