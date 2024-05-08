import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ url, after }) => 
        url
          ? `${url}.json?raw_json=1&after=${after}`
          : `/r/popular.json?raw_json=1&after=${after}`,
      providesTags: (result, error, arg) => ['Posts'],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems, otherArgs) => {
        // console.log(otherArgs.arg)
        // console.log(newItems.data)
        // console.log(currentCache.data.after)
        if(!otherArgs.arg.after) {
          currentCache.data = newItems.data
        } else {
          currentCache.data.after = newItems.data.after
          currentCache.data.children.push(...newItems.data.children)
        }
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),

    getPopularSubreddits: builder.query({
      query: () => `/subreddits/popular.json`,
    }),

    getPostComments: builder.query({
      query: (permalink) => `${permalink}/.json?raw_json=1;limit=6`,
    }),

    getSearchResults: builder.query({
      query: ({ query, after }) => `/search.json?q=${query}&after=${after}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems, otherArgs) => {
        if (!otherArgs.arg.after) {
          currentCache.data = newItems.data
        } else {
          currentCache.data.after = newItems.data.after
          currentCache.data.children.push(...newItems.data.children)
        }
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),

    getUserInfo: builder.query({
      query: (username) => `user/${username}/about.json?raw_json=1`,
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPopularSubredditsQuery,
  useGetPostCommentsQuery,
  useGetSearchResultsQuery,
  useGetUserInfoQuery
} = postsApi