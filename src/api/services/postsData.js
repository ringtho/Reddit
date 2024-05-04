import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (urlLink) =>
        urlLink
          ? `${urlLink}.json?raw_json=1`
          : '/r/popular.json?raw_json=1',
    }),

    getPopularSubreddits: builder.query({
      query: () => `/subreddits/popular.json`,
    }),

    getPostComments: builder.query({
      query: (permalink) => `${permalink}/.json?raw_json=1;limit=6`,
    }),
  }),
})

export const { useGetPostsQuery, useGetPopularSubredditsQuery, useGetPostCommentsQuery } = postsApi