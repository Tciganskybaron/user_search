import { SearchUsers, SmallCardUser } from '~features/users/ui';
import styles from './MainPage.module.scss';
import { Header } from '~widgets/layout/ui';
import { CardUser } from '~entities/users/ui/CardUser/CardUser';
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
      <aside style={{ display: 'flex' }}>
        <div>
          <SearchUsers onSerchUsers={onSerchUsers} />
          <ul>
            {users.map((user, i) => (
              <SmallCardUser
                key={user.mail}
                name={user.name}
                mail={user.mail}
                selected={i != 1}
              />
            ))}
          </ul>
        </div>
        <div>
          <CardUser />
        </div>
      </aside>
    </div>
  );
}
