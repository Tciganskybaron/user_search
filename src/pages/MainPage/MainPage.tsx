import { useEffect } from 'react';
import { SearchEmployees, SmallCardEmployee } from '~features/employee/ui';
import styles from './MainPage.module.scss';
import { Header } from '~widgets/layout/ui';
import { CardEmployee } from '~entities/employee/ui';
import text from '~shared/constants/text';
import { useEmployeeStore } from '~features/employee/model/useEmployeeStore';

export default function MainPage() {
  console.log('render MainPage');
  const { employee, employees, search, loading, fetchResults } =
    useEmployeeStore();
  console.log('search =>', search);
  useEffect(() => {
    fetchResults(search);
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['main-page']}>
      <Header />
      <div className={styles['main-box']}>
        <aside className={styles['search-box']}>
          <SearchEmployees />
          <label className={styles['search-label']}>{text.RESULTS}</label>
          <ul className={styles['search-box-ul']}>
            {employees.map((user) => (
              <SmallCardEmployee
                key={user.username}
                employee={user}
                selected={user.username === 'Antonette'}
              />
            ))}
          </ul>
        </aside>
        <section className={styles['info-box']}>
          {employee && <CardEmployee employee={employee} />}
        </section>
      </div>
    </div>
  );
}
