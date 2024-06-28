import { Search } from '~shared/types/search';

export const searcInput = (value: string): Search => {
  const id: string[] = [];
  const username: string[] = [];

  value.split(',').forEach((item) => {
    const trimmedItem = item.trim();
    if (/^\d+$/.test(trimmedItem)) {
      id.push(trimmedItem);
    } else {
      username.push(trimmedItem);
    }
  });

  return { id, username };
};
