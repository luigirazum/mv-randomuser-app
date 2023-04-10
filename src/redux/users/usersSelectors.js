export const selectUsersStore = (store) => store.users;
export const selectUsers = (store) => store.users.users;
export const selectIsLoading = (store) => store.users.isLoading;
export const selectError = (store) => store.users.error;
export const selectUserById = (store, id) => store.users.filter((user) => user.uuid === id);
