import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            name: "Victor Mugisha Shyaka",
            age: 0,
            username: "victor",
            email: "helloworld@example.com"
        }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    },
})

export default userSlice.reducer