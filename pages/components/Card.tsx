import styles from '../../styles/Home.module.css';

interface Props {
  item: any;
  index: number;
  handleCurrent: any;
}
const Card: React.FC<Props> = ({ item, index, handleCurrent }) => {
  return (
    <div key={index}>
      <ul
        className={styles.card}
        style={{ width: '200px', height: '200px' }}
        onClick={() => handleCurrent(item)}
      >
        <img src={item?.img} style={{ width: '100%', height: '50px' }} />
        <h2>{item?.title}</h2>
        <p>See more &rarr;</p>
      </ul>
    </div>
  );
};

export default Card;
