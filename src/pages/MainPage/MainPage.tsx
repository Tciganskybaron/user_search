import { SearchEmployees } from '~features/employee/ui';
import styles from './MainPage.module.scss';
import { Header } from '~widgets/layout/ui';
import text from '~shared/constants/text';
import { EmployeeDetails, EmployeeList } from '~widgets/employee/ui';

export default function MainPage() {
  return (
    <div className={styles['main-page']}>
      <Header />
      <div className={styles['main-box']}>
        <aside className={styles['search-box']}>
          <SearchEmployees />
          <label className={styles['search-label']}>{text.RESULTS}</label>
          <EmployeeList />
        </aside>
        <section className={styles['info-box']}>
          <EmployeeDetails />
        </section>
      </div>
    </div>
  );
}
