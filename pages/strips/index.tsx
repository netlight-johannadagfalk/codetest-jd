import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import DataTable from '../../components/DataTable';

const StripsPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <Header title="CODETEST" link="https://xkcd.com/" linkTitle="XKCD" />
      <DataTable />
    </main>
  );
};

export default StripsPage;
