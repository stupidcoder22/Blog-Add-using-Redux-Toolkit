const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  { id: 0, name: "Prateek Singh" },
  { id: 1, name: "Angad Bhardwaj" },
  { id: 2, name: "Hemant Sharma" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getallUser = (state) => state.user;
export default usersSlice.reducer;
