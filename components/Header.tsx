import styles from '../styles/Home.module.css';

interface Props {
  title: string;
  link: string;
  linkTitle: string;
}
const Header: React.FC<Props> = ({ title, link, linkTitle }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <a href={link} className={styles.title}>
        {linkTitle}
      </a>
    </>
  );
};

export default Header;
