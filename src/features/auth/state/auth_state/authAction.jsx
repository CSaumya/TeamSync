import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",

  async (credentials, thunkApi) => {
    try {
      const res = await axiosInstance.post(
        "/auth/login",
        credentials
      );

      return res.data.data;
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Login failed. Please try again."
      );
    }
  }
);


export const currLoggedInEmployee = createAsyncThunk(
  "auth/me",

  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get("/auth/me");

      console.log("Current employee:", res.data);

      return res.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data?.message ||
          "User is not authenticated"
      );
    }
  }
);