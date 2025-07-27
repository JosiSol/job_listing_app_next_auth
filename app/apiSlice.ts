import { createApi, EndpointBuilder, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "./data"

interface Tranform {
    success: boolean,
    message: string,
    data: Job[],
    error: any,
    count: number,
}

interface TransformId {
    success: boolean,
    message: string,
    data: Job,
    error: any,
    count: number, 
}

export const jobsApi = createApi({
    reducerPath: "jobsApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://akil-backend.onrender.com/'}),
    endpoints: (builder: EndpointBuilder<any, any, any>) => ({
        getJobs: builder.query<Job[], void>({
            query: () => `opportunities/search`,
            transformResponse: (response: Tranform) => response.data,
        }),
        getJobsById: builder.query<Job, string>({
            query: (id: string) => `opportunities/${id}`,
            transformResponse: (response: TransformId) => response.data,
        })
    }),
});

export const { useGetJobsQuery, useGetJobsByIdQuery } = jobsApi;
