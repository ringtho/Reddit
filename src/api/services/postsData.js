import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (urlLink) =>
        urlLink
          ? `${urlLink}.json?raw_json=1`
          : 'https://www.reddit.com/r/popular.json?raw_json=1',
    }),
  }),
})

export const { useGetPostsQuery } = postsApi