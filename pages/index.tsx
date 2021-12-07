import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codetest</title>
      </Head>

      <Footer text={'by Johanna Dagfalk'} />
    </div>
  );
};

export default HomePage;
