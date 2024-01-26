import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin/AdminSlice"

const store = configureStore({
    reducer: {
        admin: adminReducer,
    }
});

export default store;