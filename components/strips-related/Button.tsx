import styles from '../styles/Home.module.css';

interface Props {
  text: string;
  onClick: any;
  style?: string;
}
const Button: React.FC<Props> = ({ text, onClick, style }) => {
  return (
    <>
      <button
        className={style}
        onClick={onClick}
        style={{ width: '150px', height: '40px' }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
