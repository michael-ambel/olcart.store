import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, ICartItem, IShippingAddress } from "../types/userTypes";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/users" }),
  tagTypes: ["Users", "Cart"],

  endpoints: (builder) => ({
    // Register user
    registerUser: builder.mutation<IUser, Partial<IUser>>({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),

    // Login user
    loginUser: builder.mutation<IUser, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // Logout user
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),

    // Get user cart
    getUserCart: builder.query<ICartItem[], void>({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),

    // adding, updating, and removing cart items
    updateCart: builder.mutation<ICartItem[], Partial<ICartItem>>({
      query: (cartData) => ({
        url: "/cart",
        method: "PATCH",
        body: cartData,
      }),
      invalidatesTags: ["Cart"],
    }),

    // Shipping address endpoints
    // Add a new shipping address
    addShippingAddress: builder.mutation<IShippingAddress[], IShippingAddress>({
      query: (address) => ({
        url: "/shipping-address",
        method: "POST",
        body: address,
      }),
      invalidatesTags: ["Users"],
    }),

    // Get user shipping addresses
    getShippingAddresses: builder.query<IShippingAddress[], void>({
      query: () => "/shipping-address",
      providesTags: ["Users"],
    }),

    // Update an existing shipping address
    updateShippingAddress: builder.mutation<
      IShippingAddress[],
      IShippingAddress
    >({
      query: (address) => ({
        url: "/shipping-address",
        method: "PATCH",
        body: address,
      }),
      invalidatesTags: ["Users"],
    }),

    // Delete a shipping address
    deleteShippingAddress: builder.mutation<void, { _id: string }>({
      query: ({ _id }) => ({
        url: "/shipping-address",
        method: "DELETE",
        body: { _id },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserCartQuery,
  useUpdateCartMutation,
  useAddShippingAddressMutation,
  useGetShippingAddressesQuery,
  useUpdateShippingAddressMutation,
  useDeleteShippingAddressMutation,
} = userApiSlice;
