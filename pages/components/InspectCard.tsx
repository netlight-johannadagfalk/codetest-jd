import React from 'react';

import styles from '../../styles/Home.module.css';

interface Props {
  current: any;
}
const InspectCard: React.FC<Props> = ({ current }) => {
  return (
    <div className={styles.card} style={{ width: '2000px', height: '100%' }}>
      <img src={current.img} style={{ width: '100%', height: '100%' }} />
      <h2>Title: {current.title}</h2>
      <p>Number: {current.num} </p>
      <p>Day: {current.day} </p>
      <p>Year: {current.year} </p>

      <p>Link: {current.link} </p>
      <p>News: {current.news} </p>
      <p>Alt: {current.alt} </p>
    </div>
  );
};

export default InspectCard;
