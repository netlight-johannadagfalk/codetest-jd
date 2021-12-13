import type { NextPage } from 'next';
import { useState } from 'react';
import router from 'next/router';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import DataTable from '../../components/strips-related/DataTable';
import Button from '../../components/strips-related/Button';
import { Strip, HttpResponse } from '../../components/strips-related/DataTable';
import useHttp from '../../hooks/use-http';
// interface Props {
//   initialData: Strip[];
// }

const StripsPage: NextPage = () => {
  const goBack = () => {
    router.push('/');
  };
  return (
    <>
      <Button text={'Go Back'} onClick={goBack} style={styles.backButton} />
      <main className={styles.main}>
        <Header title="CODETEST" link="https://xkcd.com/" linkTitle="XKCD" />
        <DataTable />
      </main>
    </>
  );
};
// export async function getStaticProps() {
//   const [initialData, setInitialData] = useState<Strip[]>();
//   const httpRes: HttpResponse = useHttp();
//   const array = [1, 2, 3, 4];

//   const transformStrip = (data: any) => {
//     const transformedData: Strip = {
//       month: data.number,
//       num: data.num,
//       link: data.link,
//       year: data.year,
//       news: data.news,
//       safe_title: data.safe_title,
//       transcript: data.transcript,
//       alt: data.alt,
//       img: data.img,
//       title: data.title,
//       day: data.day
//     };
//     setInitialData((oldArray: any) => [...oldArray, transformedData]);
//   };

//   array.map((item: number) => {
//     const URL = `http://localhost:8080/getData/${item}`;
//     httpRes.sendRequest({ url: URL }, transformStrip);
//   });

//   return {
//     props: {
//       initialData: initialData
//     }
//   };
// }

export default StripsPage;
