import { Employee } from '~shared/types/employee';

export interface SmallCardEmployeeProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  employee: Employee;
  selected: boolean;
  setEmployee: React.Dispatch<React.SetStateAction<Employee | undefined>>;
}
