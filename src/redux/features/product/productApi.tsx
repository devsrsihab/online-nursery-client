import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page, limit, category, searchTerm }) => {
        // Construct base URL
        const baseUrl = `/products?page=${page}&limit=${limit}`;

        // Construct query parameters based on provided values
        const params = new URLSearchParams();

        if (category) {
          params.append("category", category);
          console.log("category form rkt route", category);
        }

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        // Combine base URL with query parameters
        const queryString = params.toString();
        const finalUrl = queryString ? `${baseUrl}&${queryString}` : baseUrl;

        return {
          url: finalUrl,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),

    addProducts: builder.mutation({
      query: (payload) => ({
        url: "/products",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["products"],
    }),

    editProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    updateProducts: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useAddProductsMutation,
  useGetAllProductsQuery,
  useDeleteProductsMutation,
  useEditProductsQuery,
  useUpdateProductsMutation,
} = productApi;
