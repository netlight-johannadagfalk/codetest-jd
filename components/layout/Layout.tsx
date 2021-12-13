import React from 'react';
import styles from '../../styles/Home.module.css';
import MainNavigation from './MainNavigation';
import Footer from '../Footer';

const Layout: React.FC = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>

      <Footer text={'by Johanna Dagfalk'} />
    </div>
  );
};

export default Layout;
