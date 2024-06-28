import { Dispatch, SetStateAction } from 'react';
import { Search } from '~shared/types/search';

export interface SearchEmployeesProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  setSearh: Dispatch<SetStateAction<Search>>;
}
