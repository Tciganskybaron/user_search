import { useEmployeeStore } from '~features/employee/model/useEmployeeStore';
import { CardEmployee } from '~entities/employee/ui';
import { EmployeeDetailsProps } from './EmployeeDetails.props';

export const EmployeeDetails = ({ ...props }: EmployeeDetailsProps) => {
  const { employee } = useEmployeeStore();

  return (
    <div {...props}>{employee && <CardEmployee employee={employee} />}</div>
  );
};
