import { SmallCardEmployee } from '~features/employee/ui';
import classNames from 'classnames';
import styles from './EmployeeList.module.scss';
import { useEmployeeStore } from '~features/employee/model/useEmployeeStore';
import { EmployeeListProps } from './EmployeeList.props';
import { Preloader } from '~shared/ui';

export const EmployeeList = ({ ...props }: EmployeeListProps) => {
  const { loading, notFound, employees, employee } = useEmployeeStore();

  return (
    <ul
      className={classNames(styles['search-box-ul'], {
        [styles.loading]: loading,
      })}
      {...props}
    >
      {employees &&
        !loading &&
        employees.map((user) => (
          <SmallCardEmployee
            key={user.username}
            employee={user}
            selected={user.email === employee?.email}
          />
        ))}
      {notFound && (
        <li className={styles['search-not-found']}>ничего не найдено </li>
      )}
      {loading && <Preloader />}
    </ul>
  );
};
