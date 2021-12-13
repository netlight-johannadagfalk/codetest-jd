import React from 'react';

import styles from '../styles/Home.module.css';

interface Props {
  text: string;
}
const Footer: React.FC<Props> = ({ text }) => {
  return <div className={styles.footer}>{text}</div>;
};

export default Footer;
