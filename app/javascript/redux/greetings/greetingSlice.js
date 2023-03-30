import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () =>{
  const response = await fetch("http://127.0.0.1:3000/api/v1/messages");
  const data = await response.json();
  return data
})

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    id: null,
    greeting: "",
    created_at: "",
    updated_at: "",
    error: "",
    isLoading: false,
    successful: false
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, (state) => ({
      ...state,
      isLoading: true,
      error: ""
    }));

    builder.addCase(fetchGreetings.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      successful: true,
      greeting: action.payload,
    }));

    builder.addCase(fetchGreetings.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));
  }
})

export default greetingSlice.reducer