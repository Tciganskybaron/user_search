import { SearchEmployees, SmallCardEmployee } from '~features/employee/ui';
import styles from './MainPage.module.scss';
import { Header } from '~widgets/layout/ui';
import { CardEmployee } from '~entities/employee/ui';
import text from '~shared/constants/text';

export default function MainPage() {
  function onSerchUsers(value: string) {
    console.log(value);
  }
  const users = [
    { name: 'Bret', mail: 'Sincere@april.biz' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
  ];
  return (
    <div className={styles['main-page']}>
      <Header />
      <div className={styles['main-box']}>
        <aside className={styles['search-box']}>
          <SearchEmployees onSerchUsers={onSerchUsers} />
          <label className={styles['search-label']}>{text.RESULTS}</label>
          <ul className={styles['search-box-ul']}>
            {users.map((user, i) => (
              <SmallCardEmployee
                key={user.mail}
                name={user.name}
                mail={user.mail}
                selected={i != 1}
              />
            ))}
          </ul>
        </aside>
        <section className={styles['info-box']}>
          <CardEmployee />
        </section>
      </div>
    </div>
  );
}
