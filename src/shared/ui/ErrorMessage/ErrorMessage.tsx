import { ErrorMessageProps } from './ErrorMessage.props';
import styles from './ErrorMessage.module.scss';
import text from '~shared/constants/text';

export const ErrorMessage = ({
  message,
  ...props
}: ErrorMessageProps): JSX.Element => {
  return (
    <div className={styles.error} {...props}>
      <h2>{text.OOPS}</h2>
      <p>{message}</p>
    </div>
  );
};
