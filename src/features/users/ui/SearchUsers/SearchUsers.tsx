import { SearchUsersProps } from './SearchUsers.props';
import styles from './SearchUsers.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';

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
      <label className={styles['search-label']}>Поиск сотрудников</label>
      <input
        className={styles['search-input']}
        placeholder="В ведите id или имя"
        type="text"
        onChange={handleInputChange}
      />
    </div>
  );
};
