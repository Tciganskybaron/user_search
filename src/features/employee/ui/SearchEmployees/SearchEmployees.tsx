import { SearchEmployeesProps } from './SearchEmployees.props';
import styles from './SearchEmployees.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import text from '~shared/constants/text';
import { searcInput } from '~shared/helpers/serchInput';
import { useEmployeeStore } from '~features/employee/model/useEmployeeStore';

export const SearchEmployees = ({
  ...props
}: SearchEmployeesProps): JSX.Element => {
  console.log('render SearchEmployees');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { setSearch } = useEmployeeStore();

  useEffect(() => {
    const handler = setTimeout(() => {
      const { id, username } = searcInput(searchTerm);
      setSearch({ id, username });
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, setSearch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event.target.value', event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.search} {...props}>
      <label className={styles['search-label']}>{text.SEARCH_EMPLOYEE}</label>
      <input
        className={styles['search-input']}
        placeholder={text.PLACEHOLDER_SEARH}
        type="text"
        // value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};
