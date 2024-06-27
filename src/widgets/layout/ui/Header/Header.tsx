import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import { Logo } from '~entities/layout/ui';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <Logo />
      <div className={styles.user}>Пользователь</div>
    </header>
  );
};
