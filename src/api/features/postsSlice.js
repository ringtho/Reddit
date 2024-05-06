import { createSlice } from "@reduxjs/toolkit"

const initialState = { url: '', query: '' }

const postsSlice = createSlice({
    name: 'postStates',
    initialState,
    reducers: {
        addUrl: (state, action) => {
            state.url = action.payload
        },
        addQuery: (state, action) => {
            state.query = action.payload
        }
    }
})

export default postsSlice.reducer
export const { addUrl, addQuery } = postsSlice.actions