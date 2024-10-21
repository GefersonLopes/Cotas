import { create } from 'zustand';

type UserState = {
  users: any[];
  fetchUsers: () => void;
};

export const useUserStore = create<UserState>((set: any) => ({
  users: [],
  fetchUsers: async () => {
    const users = await fetch(
      'https://jsonplaceholder.typicode.com/users',
    ).then((res) => res.json());
    set({ users });
  },
}));
