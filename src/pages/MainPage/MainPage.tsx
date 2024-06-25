import styles from './MainPage.module.scss';
import { Header } from '~widgets/layout/ui';
export default function MainPage() {
  return (
    <body className={styles.body}>
      <Header />
    </body>
  );
}
