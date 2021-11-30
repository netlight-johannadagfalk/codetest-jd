import React from 'react';

import styles from '../../styles/Home.module.css';

interface Props {
  text: string;
  onClick: any;
}
const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} style={{ width: '150px', height: '40px' }}>
        {text}
      </button>
    </>
  );
};

export default Button;
