import { createSlice } from '@reduxjs/toolkit';

const testUsers = [
  {
    uuid: 'u1',
    first: 'luis',
    last: 'zubia',
  },
  {
    uuid: 'u2',
    first: 'jose',
    last: 'carrera',
  },
];

const initialState = {
  users: [...testUsers],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {},
});

export default usersSlice.reducer;
