import { SearchEmployeesProps } from './SearchEmployees.props';
import styles from './SearchEmployees.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import text from '~shared/constants/text';
import { searcInput } from '~shared/helpers/serchInput';
import { useEmployeeStore } from '~features/employee/model/useEmployeeStore';

export const SearchEmployees = ({
  ...props
}: SearchEmployeesProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { fetchResults } = useEmployeeStore();

  useEffect(() => {
    const handler = setTimeout(() => {
      const { id, username } = searcInput(searchTerm);
      fetchResults({ id, username });
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, fetchResults]);

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
