import { createSlice } from "@reduxjs/toolkit";

const initialThemeValue = ""

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: initialThemeValue
    },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { changeColor } = themeSlice.actions

export default themeSlice.reducer