import create from 'zustand';
import { Employee } from '~shared/types/employee';
import { Search } from '~shared/types/search';
import { searchApi } from '~features/employee/api';

interface EmployeeState {
  employee: Employee | null;
  employees: Employee[];
  loading: boolean;
  setEmployee: (employees: Employee) => void;
  setEmployees: (employees: Employee[]) => void;
  fetchResults: (search: Search) => void;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employee: null,
  employees: [],
  loading: false,
  setEmployee: (employee: Employee) => set({ employee }),
  setEmployees: (employees) => set({ employees }),
  fetchResults: async (search) => {
    set({ loading: true });
    try {
      let searchRes: Employee[] = [];
      let searchRes2: Employee[] = [];

      if (search.id.length > 0) {
        const res = await fetch(searchApi.getUsersId(search.id));
        searchRes = (await res.json()) as Employee[];
      }

      if (search.username.length > 0) {
        const res2 = await fetch(searchApi.getUsersName(search.username));
        searchRes2 = (await res2.json()) as Employee[];
      }
      const employees = searchRes.concat(searchRes2);

      set({ employees });
      set((state) => ({
        employee: state.employee
          ? employees.includes(state.employee)
            ? state.employee
            : null
          : state.employee,
      }));
    } catch (error) {
      console.error('Failed to fetch results:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
