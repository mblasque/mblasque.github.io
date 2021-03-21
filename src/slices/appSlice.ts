import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppSlice = {
    language: string;
}

export const initialState: AppSlice = {
  language: "pt"
}

export const appslice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setApp: (state, action: PayloadAction<AppSlice>) => {
        return { ...state, ...action.payload}
      },
    },
})

export const { setApp } = appslice.actions;

export default appslice.reducer;