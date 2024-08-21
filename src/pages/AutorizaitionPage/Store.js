import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseTrainItem: '',
};

export const autorizationSlice = createSlice({
  name: "autorization",
  initialState,
   reducers: {
   logIn: (state, action) => {
      state.chooseTrainItem = action.payload.el;
      console.log(action.payload.el)
         },

  
    logOut: (state, action) => {
      state.test = action.payload;
      console.log(state.test)
    },
 },
});

export const {
  logIn,
  logOut,
} = autorizationSlice.actions;
 export const autorization = (state) => state.autorizationSlice;
 export default autorizationSlice.reducer;

