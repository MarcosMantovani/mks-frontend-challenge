import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type getProductsResponse = {
  products: Product[]
  count: number
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<getProductsResponse, void>({
      query: () => 'products?page=1&rows=8&sortBy=id&orderBy=ASC'
    })
  })
})

export const { useGetProductsQuery } = api

export default api
