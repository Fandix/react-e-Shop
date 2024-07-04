import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = { isLoggedIn: false, user: null }

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      console.log(email, password);
      const response = await axios.post('http://localhost:3001/register', { email, password });
      console.log(response);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        throw message;
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response);
      // Store JWT to local_storage
      // TODO
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        throw message;
    }
  }
)


const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    })
    builder.addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = null; // TODO
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
    })
  }
})

export default userSlice.reducer
