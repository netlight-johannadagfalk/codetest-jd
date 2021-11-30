import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const Home: NextPage = () => {
  const [pageItems, setPageItems] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState<any>();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'num',
      key: 'num'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img'
    }
  ];

  const getData = async (URL: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const transformedData = {
        month: data.month,
        num: data.num,
        link: data.link,
        year: data.year,
        news: data.news,
        safe_title: data.safe_title,
        // transcript: item.transcript,
        alt: data.alt,
        img: data.img,
        title: data.title,
        day: data.day
      };
      setIsLoading(false);
      return transformedData;
    } catch (error) {
      // setError(error)
      console.log(error);
    }
  };

  const nextPage = (array: number[]) => {
    array.map(async (item: any) => {
      const newElement = await getData(`http://localhost:8080/getData/${item}`);
      setPageItems((oldArray: any) => [...oldArray, newElement]);
    });
    setPage(page + 1);
  };

  function itemsArray(page: number) {
    var start = page === 1 ? 1 : page * 10;
    var end = page === 1 ? 10 : (page + 1) * 10;

    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>EMBARK codetest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Embark codetest</h1>
        <a href="https://xkcd.com/" className={styles.title}>
          XKCD
        </a>
        {!isLoading && pageItems.length === 0 && <p>No items found</p>}
        {isLoading && <p> Loading...</p>}
        {current && (
          <div>
            <h2>MORE INFO</h2>
            <h2>{current.title}</h2>
            <p>{current.img} </p>
            <p>{current.num} </p>
            <p>{current.link} </p>
            <p>{current.year} </p>
            <p>{current.news} </p>
            <p>{current.alt} </p>
            <p>{current.day} </p>

            <img src={current.img} style={{ width: '40px', height: '40px' }} />
          </div>
        )}

        {!isLoading && pageItems.length > 0 && (
          <Table
            dataSource={pageItems}
            columns={columns}
            // onSelect={() => setCurrent(selected)}
          />
        )}
        {/* <div className={styles.grid}>
          {!isLoading &&
            pageItems.length > 0 &&
            pageItems.map((item: any, index: number) => (
              <div key={index}>
                <ul className={styles.card} onClick={() => setCurrent(item)}>
                  <h2>{item.title}</h2>
                  <img
                    src={item.img}
                    style={{ width: '40px', height: '40px' }}
                  />
                  <p>See more &rarr;</p>
                </ul>
              </div>
            )
            )}
        </div> */}
        <button onClick={() => nextPage(itemsArray(page))}>NEXT PAGE</button>
      </main>

      <footer className={styles.footer}>Created by Johanna Dagfalk</footer>
    </div>
  );
};

export default Home;
