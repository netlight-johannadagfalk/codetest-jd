import { useState, useEffect } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import InspectCard from '../../components/strips-related/InspectCard';
import { HttpResponse, Strip } from '../../components/strips-related/DataTable';
import useHttp from '../../hooks/use-http';
import Button from '../../components/strips-related/Button';
import styles from '../../styles/Home.module.css';

const DetailPage: NextPage = () => {
  const router = useRouter();

  const stripId = router.query.stripId;

  const [current, setCurrent] = useState<Strip>();
  const httpRes: HttpResponse = useHttp();
  const URL = `http://localhost:8080/getData/${stripId}`;

  const goBack = () => {
    router.push('/strips');
  };

  useEffect(() => {
    const detailedStrip = (data: any) => {
      const transformedItem: Strip = {
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
      setCurrent(transformedItem);
    };

    httpRes.sendRequest({ url: URL }, detailedStrip);
  }, [httpRes.sendRequest, URL]);

  return (
    <>
      <Button text={'Go Back'} onClick={goBack} style={styles.backButton} />
      <InspectCard current={current} />
    </>
  );
};

export default DetailPage;
