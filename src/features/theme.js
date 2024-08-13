import { createSlice } from "@reduxjs/toolkit";

const initialThemeValue = ""

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: initialThemeValue
    },
    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer