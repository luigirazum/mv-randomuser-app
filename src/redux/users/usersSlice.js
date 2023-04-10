import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

const FETCH_USERS = 'users/fetchAllUsers';

const fetchAllUsers = createAsyncThunk(
  FETCH_USERS,
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('https://randomuser.me/api/?results=5');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

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
