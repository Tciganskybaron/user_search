import { useEmployeeStore } from '~features/employee/model/useEmployeeStore';
import { CardEmployee } from '~entities/employee/ui';
import { EmployeeDetailsProps } from './EmployeeDetails.props';
import { ErrorMessage } from '~shared/ui';
import style from './EmployeeDetails.module.scss';
import cn from 'classnames';
import text from '~shared/constants/text';

export const EmployeeDetails = ({ ...props }: EmployeeDetailsProps) => {
  const { employee, errorMessage } = useEmployeeStore();

  return (
    <div
      {...props}
      className={cn({ [style.center]: errorMessage || !employee })}
    >
      {employee && <CardEmployee employee={employee} />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {!employee && !errorMessage && (
        <div className={style.select}>{text.SElECT_EMPLOYEE}</div>
      )}
    </div>
  );
};
