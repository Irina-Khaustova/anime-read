import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://manga.gotogrow.ru/api/v1/",
    
  }),
  endpoints: (builder) => ({
    logIn: builder.mutation({
        query(body) {
            // const { id, ...body } = data;
            console.log(body)
            return {
              url: `u/users/signin/`,
              method: "POST",
              body,
            };
        }
    }),
    getTrain: builder.query({
      query: (id) => `routes?${id}`,
    }),
    getWagon: builder.query({
      query: (id) => `routes/${id}/seats`,
    }),
    putOrder: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `u/login/`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  
  useLogInMutation,
} = myApi;
