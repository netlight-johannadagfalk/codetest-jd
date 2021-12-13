import styles from '../../styles/Home.module.css';
import { Strip } from './DataTable';

interface Props {
  item: Strip;
  index: number;
  handleCurrent: (item: Strip) => void;
}
const Card: React.FC<Props> = ({ item, index, handleCurrent }) => {
  const maxChar = 15;
  return (
    <div key={index}>
      <ul
        className={styles.card}
        style={{ width: '200px', height: '200px' }}
        onClick={() => handleCurrent(item)}
      >
        <img src={item?.img} style={{ width: '100%', height: '50px' }} />
        <h2>
          {item?.title.length > maxChar
            ? item?.title.substring(0, maxChar) + '...'
            : item?.title}
        </h2>
        <p>See more &rarr;</p>
      </ul>
    </div>
  );
};

export default Card;
