import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Card from './Card';
import InspectCard from './InspectCard';
import Button from './Button';
import useHttp from './hooks/use-http';
import styles from '../../styles/Home.module.css';
import handler from '../api/hello';

export interface Strip {
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

export interface HttpResponse {
  isLoading: boolean;
  error: any;
  sendRequest: any;
}

const DataTable: React.FC = () => {
  const [current, setCurrent] = useState<Strip>();
  const [pageItems, setPageItems] = useState<Strip[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  const nextPage = (array: number[], transformStrip: any) => {
    array.map(async (item: number) => {
      const URL = `http://localhost:8080/getData/${item}`;

      httpRes.sendRequest({ url: URL }, transformStrip);
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

  const httpRes: HttpResponse = useHttp();

  const transformStrip = useCallback((data: any) => {
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
    setPageItems((oldArray: any) => [...oldArray, transformedData]);
  }, []);

  useEffect(() => {
    nextPage(itemsArray(page), transformStrip);
  }, []);

  return (
    <>
      {current && <InspectCard current={current} />}

      {!isLoading && pageItems.length === 0 && <p>No items found</p>}
      {error && <p>{error}</p>}
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
        onClick={() => nextPage(itemsArray(page), transformStrip)}
      />
    </>
  );
};

export default DataTable;
