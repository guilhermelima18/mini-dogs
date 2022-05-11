import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchUser } from "../User/reducer";

const login = createSlice({
  name: "login",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      (state.loading = false),
        (state.data = action.payload),
        (state.error = null);
    },
    fetchError(state, action) {
      (state.loading = false),
        (state.data = null),
        (state.error = action.payload);
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = login.actions;
export const loginReducer = login.reducer;

export const fetchLogin = (user) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await axios.post(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        ...user,
      }
    );

    if (response) {
      dispatch(fetchSuccess(response.data));

      if (response.data.token) {
        dispatch(fetchUser(response.data.token));
        localStorage.setItem(
          "mini-dogs.token",
          JSON.stringify(response.data.token)
        );
      }
    }
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
