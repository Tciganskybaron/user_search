import { SearchUsers } from '~features/users/ui/SearchUsers/SearchUsers';
import styles from './MainPage.module.scss';
import { Header } from '~widgets/layout/ui';
export default function MainPage() {
  function onSerchUsers(value: string) {
    console.log(value);
  }

  return (
    <div className={styles['main-page']}>
      <Header />
      <aside>
        <SearchUsers onSerchUsers={onSerchUsers} />
      </aside>
    </div>
  );
}
