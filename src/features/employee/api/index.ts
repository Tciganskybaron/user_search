import { backendBaseUrl } from '~shared/config/index';

export const searchApi = {
  getUsersId: (query: string[]) => {
    const url = new URL(`${backendBaseUrl}/`);
    query.forEach((id) => url.searchParams.append('id', id));
    return url.toString();
  },
  getUsersName: (query: string[]) => {
    const url = new URL(`${backendBaseUrl}/`);
    query.forEach((name) => url.searchParams.append('username', name));
    return url.toString();
  },
};
