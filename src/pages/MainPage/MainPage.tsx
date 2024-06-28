import { useState, useEffect } from 'react';
import { SearchEmployees, SmallCardEmployee } from '~features/employee/ui';
import styles from './MainPage.module.scss';
import { Header } from '~widgets/layout/ui';
import { CardEmployee } from '~entities/employee/ui';
import text from '~shared/constants/text';
import { searchApi } from '~features/employee/api';
import { Employee } from '~shared/types/employee';
import { Search } from '~shared/types/search';

const fetchResults = async (search: Search) => {
  let searchRes: Employee[] = [];
  let searchRes2: Employee[] = [];

  if (search.id.length > 0) {
    const res = await fetch(searchApi.getUsersId(search.id));
    searchRes = (await res.json()) as Employee[];
  }

  if (search.username.length > 0) {
    const res2 = await fetch(searchApi.getUsersName(search.username));
    searchRes2 = (await res2.json()) as Employee[];
  }

  return searchRes.concat(searchRes2);
};

export default function MainPage() {
  const [employee, setEmployee] = useState<Employee | undefined>();
  const [search, setSearh] = useState<Search>({ id: [], username: [] });
  const [results, setResults] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getResults = async () => {
      try {
        const results = await fetchResults(search);
        setResults(results);
      } catch (error) {
        console.error('Failed to fetch results:', error);
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['main-page']}>
      <Header />
      <div className={styles['main-box']}>
        <aside className={styles['search-box']}>
          <SearchEmployees setSearh={setSearh} />
          <label className={styles['search-label']}>{text.RESULTS}</label>
          <ul className={styles['search-box-ul']}>
            {results.map((user) => (
              <SmallCardEmployee
                key={user.username}
                employee={user}
                selected={user.name === 'Antonette'}
                setEmployee={setEmployee}
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
