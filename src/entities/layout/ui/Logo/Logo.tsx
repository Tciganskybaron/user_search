import { LogoProps } from './Logo.props';
import styles from './Logo.module.scss';
import text from '~shared/constants/text';

export const Logo = ({ ...props }: LogoProps): JSX.Element => {
  return (
    <nav {...props}>
      <a id="logo">
        <span className={styles.logo}>{text.LOGO_COMPANY}</span>
      </a>
    </nav>
  );
};
