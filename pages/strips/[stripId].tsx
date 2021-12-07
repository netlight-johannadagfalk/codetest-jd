import { useState, useEffect } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import InspectCard from '../../components/InspectCard';
import { HttpResponse, Strip } from '../../components/DataTable';
import useHttp from '../../hooks/use-http';

const DetailPage: NextPage = () => {
  const router = useRouter();

  const stripId = router.query.stripId;

  const [current, setCurrent] = useState<Strip>();
  const httpRes: HttpResponse = useHttp();
  const URL = `http://localhost:8080/getData/${stripId}`;

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
  }, []);

  return (
    <>
      <InspectCard current={current} />
    </>
  );
};

export default DetailPage;
