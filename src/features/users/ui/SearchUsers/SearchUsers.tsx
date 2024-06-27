import { SearchUsersProps } from './SearchUsers.props';
import styles from './SearchUsers.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import text from '~shared/constants/text';

export const SearchUsers = ({
  onSerchUsers,
  ...props
}: SearchUsersProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSerchUsers(searchTerm);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onSerchUsers]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className={styles.search} {...props}>
      <label className={styles['search-label']}>{text.SEARCH_EMPLOYEE}</label>
      <input
        className={styles['search-input']}
        placeholder={text.PLACEHOLDER_SEARH}
        type="text"
        onChange={handleInputChange}
      />
    </div>
  );
};
