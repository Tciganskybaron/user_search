import { SmallCardEmployeeProps } from './SmallCardEmployee.props';
import styles from './SmallCardEmployee.module.scss';
import cn from 'classnames';
import { useEmployeeStore } from '~features/employee/model/useEmployeeStore';

export const SmallCardEmployee = ({
  employee,
  selected,
  ...props
}: SmallCardEmployeeProps): JSX.Element | null => {
  const { setEmployee } = useEmployeeStore();

  if (!employee) {
    return null;
  }
  return (
    <li
      className={styles.card}
      {...props}
      onClick={() => setEmployee(employee)}
    >
      <div className={styles['box-img']}>
        <img className={styles.img} src="/image.png" alt="фото клиента" />
      </div>
      <div
        className={cn(styles.info, {
          [styles.selected]: selected,
        })}
      >
        <label className={styles.username}>{employee.username}</label>
        <div className={styles.email}>{employee.email}</div>
      </div>
    </li>
  );
};
