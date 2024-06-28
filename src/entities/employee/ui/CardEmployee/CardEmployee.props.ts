import { Employee } from '~shared/types/employee';

export interface CardEmployeeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  employee: Employee;
}
