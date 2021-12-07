import React from 'react';
import styles from '../../styles/Home.module.css';
import MainNavigation from './MainNavigation';

const Layout: React.FC = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
