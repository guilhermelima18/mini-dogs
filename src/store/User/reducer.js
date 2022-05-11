import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    userStarted(state) {
      (state.loading = true), (state.data = null), (state.error = null);
    },
    userSuccess(state, action) {
      (state.loading = false),
        (state.data = action.payload),
        (state.error = null);
    },
    userError(state, action) {
      (state.loading = false),
        (state.data = null),
        (state.error = action.payload);
    },
  },
});

export const { userStarted, userSuccess, userError } = user.actions;
export const userReducer = user.reducer;

export const fetchUser = (token) => async (dispatch) => {
  try {
    dispatch(userStarted());
    const response = await axios.get(
      "https://dogsapi.origamid.dev/json/api/user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response) {
      dispatch(userSuccess(response.data));
      localStorage.setItem("mini-dogs.user", JSON.stringify(response.data));
    }
  } catch (error) {
    dispatch(userError(error.message));
  }
};
