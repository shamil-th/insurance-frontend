import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// retrive all applications
export const getAllapplications = createAsyncThunk('admin/getAllapplications', async () => {
    try {
        const response = await axios.get('http://localhost:4000/application');
        if (!response.data) {
            throw new Error('data not find')
        }
        return response.data;
    } catch (err) {
        console.Error("could not find data")
    }
});


// post application
export const postApplication = createAsyncThunk('admin/postApplication', async (data) => {

    const formData = new FormData()

    formData.append("salutation", data.salutaion)
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("address", data.address)
    formData.append("gender", data.gender)
    formData.append("dob", data.dob)
    formData.append("age", data.age)
    formData.append("qualification", data.qualification)
    formData.append("nominee", data.nominee)
    formData.append("relation", data.relation)
    formData.append("insuranceId", data.insuranceId)
    formData.append("profession", data.profession)
    formData.append("avatars", data.avatar)

    try {

        const response = await axios.post('http://localhost:4000/application', formData);
        if (!response.data) {
            throw new Error('application post failed')
        }
        return response.data
    } catch (err) {
        console.Error("post failed")
    }
});


// get insurance policies
export const getPolicies = createAsyncThunk('admin/getPolicies', async () => {

    try {
        const response = await axios.get('http://localhost:4000/admin/policy');
        if (!response.data) {
            console.log('no response')

            throw new Error("could not find data", Error)
        }
        return response.data;
    } catch (err) {
        console.error( "could not find data")
    }
});


const initialState = {
    applications: [],
    policies: [],
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
            .addCase(getPolicies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.policies = action.payload;
                console.log(state.status)
            })
    }
})

export default adminSlice.reducer;