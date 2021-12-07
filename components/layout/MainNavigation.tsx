import React from 'react';
import Link from 'next/link';
import classes from '../layout/MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Practise Project</div>
      <nav>
        <ul>
          <li>
            <Link href="/strips">All Strips</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
