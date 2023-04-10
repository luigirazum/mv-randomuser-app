import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const testUsers = [
//   {
//     uuid: 'u1',
//     first: 'luis',
//     last: 'zubia',
//   },
//   {
//     uuid: 'u2',
//     first: 'jose',
//     last: 'carrera',
//   },
// ];

const FETCH_USERS = 'users/fetchAllUsers';

const fetchAllUsers = createAsyncThunk(
  FETCH_USERS,
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=5');
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  // users: [...testUsers],
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllUsers.pending,
        (state) => ({
          ...state,
          isLoading: true,
        }),
      )

      .addCase(
        fetchAllUsers.fulfilled,
        (state, { payload: users }) => {
          const fetchedUsers = users.map((user) => {
            const { login: { uuid }, name: { first, last } } = user;

            return ({
              uuid,
              first,
              last,
            });
          });

          return ({
            ...state,
            isLoading: false,
            users: fetchedUsers,
          });
        },
      )

      .addCase(
        fetchAllUsers.rejected,
        (state, payload) => ({
          ...state,
          isLoading: false,
          error: payload.error,
        }),
      );
  },
});

export { fetchAllUsers };

export default usersSlice.reducer;
