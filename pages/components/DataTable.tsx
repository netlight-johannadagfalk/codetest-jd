import React from 'react';
import { useState } from 'react';
import Card from './Card';
import InspectCard from './InspectCard';
import { useRouter } from 'next/router';
import Button from './Button';

import styles from '../../styles/Home.module.css';

interface Strip {
  month: string;
  num: number;
  link: string;
  year: number;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: number;
}

const DataTable: React.FC = () => {
  const [current, setCurrent] = useState<Strip>();
  const [pageItems, setPageItems] = useState<Strip[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const getData = async (URL: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const transformedData: Strip = {
        month: data.number,
        num: data.num,
        link: data.link,
        year: data.year,
        news: data.news,
        safe_title: data.safe_title,
        transcript: data.transcript,
        alt: data.alt,
        img: data.img,
        title: data.title,
        day: data.day
      };
      setIsLoading(false);
      return transformedData;
    } catch (error: any) {
      setError(error);
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
      .fill(undefined)
      .map((_, idx) => start + idx);
  }

  const handleCurrent = (item: Strip) => {
    setCurrent(item);
    router.push(`/?id:${item.num}`, undefined, { shallow: true });
  };

  return (
    <>
      {current && <InspectCard current={current} />}

      {!isLoading && pageItems.length === 0 && <p>No items found</p>}
      {isLoading && <p> Loading...</p>}
      <div className={styles.grid}>
        {!isLoading &&
          pageItems.length > 0 &&
          pageItems.map((item: Strip, index: number) => (
            <Card
              item={item}
              key={index}
              index={index}
              handleCurrent={handleCurrent}
            />
          ))}
      </div>

      <Button
        text={'LOAD MORE DATA'}
        onClick={() => nextPage(itemsArray(page))}
      />
    </>
  );
};

export default DataTable;
