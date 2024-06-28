import { SmallCardEmployeeProps } from './SmallCardEmployee.props';
import styles from './SmallCardEmployee.module.scss';
import cn from 'classnames';

export const SmallCardEmployee = ({
  name,
  mail,
  selected,
  ...props
}: SmallCardEmployeeProps): JSX.Element => {
  return (
    <li className={styles.card} {...props}>
      <div className={styles['box-img']}>
        <img className={styles.img} src="/image.png" alt="фото клиента" />
      </div>
      <div
        className={cn(styles.info, {
          [styles.selected]: selected,
        })}
      >
        <label className={styles.name}>{name}</label>
        <div className={styles.mail}>{mail}</div>
      </div>
    </li>
  );
};
