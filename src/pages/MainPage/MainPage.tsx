import { SearchUsers, SmallCardUser } from '~features/users/ui';
import styles from './MainPage.module.scss';
import { Header } from '~widgets/layout/ui';
import { CardUser } from '~entities/users/ui';
import text from '~shared/constants/text';

export default function MainPage() {
  function onSerchUsers(value: string) {
    console.log(value);
  }
  const users = [
    { name: 'Bret', mail: 'Sincere@april.biz' },
    { name: 'Antonette', mail: 'Shanna@melissa.tv' },
  ];
  return (
    <div className={styles['main-page']}>
      <Header />
      <div className={styles['main-box']}>
        <aside className={styles['search-box']}>
          <SearchUsers onSerchUsers={onSerchUsers} />
          <ul>
            <label className={styles['search-label']}>{text.RESULTS}</label>
            {users.map((user, i) => (
              <SmallCardUser
                key={user.mail}
                name={user.name}
                mail={user.mail}
                selected={i != 1}
              />
            ))}
          </ul>
        </aside>
        <section className={styles['info-box']}>
          <CardUser />
        </section>
      </div>
    </div>
  );
}
