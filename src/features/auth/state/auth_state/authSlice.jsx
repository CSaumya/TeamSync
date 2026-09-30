import { createSlice } from "@reduxjs/toolkit";
import { currLoggedInEmployee, loginEmployee } from "./authAction";

let authSlice = createSlice({
    name : "auth",
    initialState : {
        employee : null,
        isLoading : false,
    },

    reducers : {
        addEmployee : (state, action) => {
            state.employee = action.payload
            state.isLoading = false
        },

        dltEmployee : (state) => {
            state.employee = null
            state.isLoading = false
        }
    },

    extraReducers : (builder) => {
        builder
        .addCase(loginEmployee.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loginEmployee.fulfilled, (state, action) => {
            state.employee = action.payload
            state.isLoading = false
        })
        .addCase(loginEmployee.rejected, (state) => {
            state.isLoading = false
        })

        .addCase(currLoggedInEmployee.pending, (state) => {
            state.isLoading = true
        })
        .addCase(currLoggedInEmployee.fulfilled, (state, action) => {
            state.employee = action.payload
            state.isLoading = false
        })
        .addCase(currLoggedInEmployee.rejected, (state) => {
            state.isLoading = false
        })
    }
})


export let { addEmployee, dltEmployee } = authSlice.actions

export default authSlice.reducer