import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppSlice {
    language: string;
}

const todosSlice = createSlice({
    name: 'appslice',
    initialState: [] as AppSlice[],
    reducers: {
      setAppSlice: (state, action: PayloadAction<AppSlice>) => {
          state.push(action.payload)
        },
      },
  })