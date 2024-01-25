import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllapplications = createAsyncThunk('admin/getAllapplications', async () => {
    try {
        const response = await axios.get('http://localhost:4000/application');
        if (!response.data) {
            throw new Error('data not find')
        }
        return response.data;
    } catch (err) {
        console.Error(err + "could not find data")
    }
});

export const postApplication = createAsyncThunk('admin/postApplication', async (data) => {
    try {
        const response = await axios.post('http://localhost:4000/application', data);
        if (!response.data) {
            throw new Error('application post failed')
        }
        return response.data
    }catch(err){
        console.Error(err + "post failed")
    }
})


const initialState = {
    applications: [],
    status: []
}
const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllapplications.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.applications = action.payload;
            })
            .addCase(postApplication.fulfilled, (state) => {
                state.status = "succeeded";
            })
    }
})

export default adminSlice.reducer;