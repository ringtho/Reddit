import { createSlice } from "@reduxjs/toolkit"

const initialState = { url: null, query: null, after: null }

const postsSlice = createSlice({
    name: 'postStates',
    initialState,
    reducers: {
        addUrl: (state, action) => {
            state.url = action.payload
        },
        addQuery: (state, action) => {
            state.query = action.payload
        },
        addAfter: (state, action) => {
            state.after = action.payload
        }
    }
})

export default postsSlice.reducer
export const { addUrl, addQuery, addAfter } = postsSlice.actions