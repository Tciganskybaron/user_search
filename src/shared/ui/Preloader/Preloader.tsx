import styles from './Preloader.module.scss';

export const Preloader = (): JSX.Element => {
  return (
    <div className={styles.preloader}>
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className={styles.dot}></div>
      ))}
    </div>
  );
};

export default Preloader;
