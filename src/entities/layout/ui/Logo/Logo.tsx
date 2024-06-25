import { LogoProps } from './Logo.props';
import styles from './Logo.module.scss';

export const Logo = ({ ...props }: LogoProps): JSX.Element => {
  return (
    <nav {...props}>
      <a id="logo">
        <span className={styles.logo}>Жилфонд</span>
      </a>
    </nav>
  );
};
