import { CardEmployeeProps } from './CardEmployee.props';
import styles from './CardEmployee.module.scss';
import text from '~shared/constants/text';

export const CardEmployee = ({
  employee,
  ...props
}: CardEmployeeProps): JSX.Element => {
  return (
    <article className={styles.card} {...props}>
      <div className={styles['box-img']}>
        <img className={styles.img} src="/image.png" alt="фото клиента" />
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <h2 className={styles.name}>{employee.username}</h2>
          <div className={styles.contact}>
            <p>
              <strong>{`${text.EMAIL}:`}</strong>
              <a href={`mailto:${employee.email}`}>{employee.email}</a>
            </p>
            <p>
              <strong>{`${text.PHONE}:`}</strong>
              <a href={`tel:${employee.phone}`}>{employee.phone}</a>
            </p>
          </div>
        </div>
        <div className={styles.bio}>
          <h3>{`${text.ABOUT_MYSELF}:`}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </article>
  );
};
