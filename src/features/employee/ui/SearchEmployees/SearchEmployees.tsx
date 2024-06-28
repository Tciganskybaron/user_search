import { SearchEmployeesProps } from './SearchEmployees.props';
import styles from './SearchEmployees.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import text from '~shared/constants/text';
import { searcInput } from '~shared/helpers/serchInput';
import { Search } from '~shared/types/search';

export const SearchEmployees = ({
  setSearh,
  ...props
}: SearchEmployeesProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<Search>({
    id: [],
    username: [],
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearh(searchTerm);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, setSearh]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, username } = searcInput(event.target.value);
    setSearchTerm({ id, username });
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
