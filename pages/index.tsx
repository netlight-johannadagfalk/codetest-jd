import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codetest</title>
      </Head>
      <h1 className={styles.main}>This is my startpage</h1>
    </div>
  );
};

export default HomePage;
