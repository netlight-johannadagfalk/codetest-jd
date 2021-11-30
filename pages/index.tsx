import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DataTable from './components/DataTable';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EMBARK codetest</title>
      </Head>
      <main className={styles.main}>
        <Header
          title="EMBARK CODETEST"
          link="https://xkcd.com/"
          linkTitle="XKCD"
        />
        <DataTable />
      </main>
      <Footer text={'by Johanna Dagfalk'} />
    </div>
  );
};

export default Home;
