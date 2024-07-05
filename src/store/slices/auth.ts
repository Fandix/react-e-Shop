import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = { isLoggedIn: false, user: null }

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }: { name: string; email: string; password: string }) => {
    try {
      const user =  { name, email, password }
      const response = await axios.post('http://localhost:3001/signup', { user });
      if (response.status === 200) {
        return response.status;
      }
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
  async ({ email, password }: { email: string; password: string }): Promise<string> => {
    try {
      const user = { email, password };
      const response = await axios.post('http://localhost:3001/login', { user });
      if (response.status === 200) {
        return response.headers.authorization
      }
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

export const logout = createAsyncThunk(
  'auth/logout',
  async(jwt: string) => {
    try {
      const headers =  { Authorization: jwt };
      const response = await axios.delete('http://localhost:3001/logout', { headers });
      if (response.status === 200) {
        return response.data;
      }
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
      state.user = action.payload;
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
    })
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    })
  }
})

export default userSlice.reducer
