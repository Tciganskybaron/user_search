import { SmallCardEmployee } from '~features/employee/ui';
import styles from './EmployeeList.module.scss';
import { useEmployeeStore } from '~features/employee/model/useEmployeeStore';
import { EmployeeListProps } from './EmployeeList.props';

export const EmployeeList = ({ ...props }: EmployeeListProps) => {
  const { notFound, employees, employee } = useEmployeeStore();

  return (
    <ul className={styles['search-box-ul']} {...props}>
      {employees.map((user) => (
        <SmallCardEmployee
          key={user.username}
          employee={user}
          selected={user.email === employee?.email}
        />
      ))}
      {notFound && (
        <li className={styles['search-not-found']}>ничего не найдено </li>
      )}
    </ul>
  );
};
