import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// retrive all applications
export const getAllapplications = createAsyncThunk('admin/getAllapplications', async (data) => {
    // if(data.length===0){
    //     data = "";
    // }
    const {status,searchValue} = data;
    try {
        const response = await axios.get(`http://localhost:4000/application?status=${status}&search=${searchValue}`);
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

    formData.append("salutation", data.salutation)
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
            throw new Error("could not find data", Error)
        }
        return response.data;
    } catch (err) {
        console.error("could not find data")
    }
});


// update application status
export const statusUpdate = createAsyncThunk('admin/statusUpdate', async (data) => {
    const { id, value } = data;
    const newUpdate = {status:value};
    try {
        const response = await axios.put(`http://localhost:4000/application/${id}`, newUpdate);
        if (!response.data) {
            throw new Error('could not update status');
        }
        return response.data;
    } catch (err) {
        console.error('could not update status')
    }
})

const initialState = {
    applications: [],
    policies: [],
    status: [],
    searchValue: [''],
    alert: (false)
}
const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setSearchValue: (state,action) => {
            state.searchValue = action.payload;
        },
        setAlert: (state,action) => {
            state.alert = action.payload;
        }
    },
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
            })
            .addCase(statusUpdate.fulfilled, (state) => {
                state.status = "succeeded"
            })
    }
})


export const { setSearchValue,setAlert } = adminSlice.actions;
export default adminSlice.reducer;