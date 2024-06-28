import create from 'zustand';
import { Employee } from '~shared/types/employee';
import { Search } from '~shared/types/search';
import { searchApi } from '~features/employee/api';

interface EmployeeState {
  employee: Employee | null;
  employees: Employee[];
  search: Search;
  loading: boolean;
  setEmployee: (employees: Employee) => void;
  setEmployees: (employees: Employee[]) => void;
  setSearch: (search: Search) => void;
  fetchResults: (search: Search) => void;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employee: null,
  employees: [],
  search: { id: [], username: [] },
  loading: false,
  setEmployee: (employee: Employee) => set({ employee }),
  setEmployees: (employees) => set({ employees }),
  setSearch: (search) => set({ search }),
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

      set({ employees: searchRes.concat(searchRes2) });
    } catch (error) {
      console.error('Failed to fetch results:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
