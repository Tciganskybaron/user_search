import create from 'zustand';
import { Employee } from '~shared/types/employee';
import { Search } from '~shared/types/search';
import { searchApi } from '~features/employee/api';

interface EmployeeState {
  employee: Employee | null;
  employees: Employee[];
  loading: boolean;
  errorMessage: string | null;
  setEmployee: (employees: Employee) => void;
  setEmployees: (employees: Employee[]) => void;
  fetchResults: (search: Search) => void;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employee: null,
  employees: [],
  loading: false,
  errorMessage: null,
  setEmployee: (employee: Employee) => set({ employee }),
  setEmployees: (employees) => set({ employees }),
  fetchResults: async (search) => {
    set({ loading: true });
    set({ errorMessage: null });
    try {
      const [searchRes, searchRes2] = await Promise.all([
        search.id.length > 0
          ? fetch(searchApi.getUsersId(search.id)).then((res) => res.json())
          : [],
        search.username.length > 0
          ? fetch(searchApi.getUsersName(search.username)).then((res) =>
              res.json()
            )
          : [],
      ]);
      const emailSet = new Set(
        searchRes.map((employee: Employee) => employee.email)
      );
      const uniqueSearchRes2 = searchRes2.filter(
        (employee: Employee) => !emailSet.has(employee.email)
      );

      const employees = [...searchRes, ...uniqueSearchRes2];

      set({ employees });
      set((state) => ({
        employee: state.employee
          ? employees.includes(state.employee)
            ? state.employee
            : null
          : state.employee,
      }));
    } catch (error) {
      if (error instanceof Error) {
        set({
          errorMessage: `Произошла ошибка cервера, зайдите на сайт позже`,
        });
      } else {
        set({ errorMessage: 'Не известная ошибка, зайдите на сайт позже' });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
