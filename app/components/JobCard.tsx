"use client";
import { Job } from "../data";
import Link from "next/link";
import { useGetJobsQuery } from "../apiSlice";
import { signOut } from "next-auth/react";

const JobCard = ({ job }: { job: Job }) => {
  const logoUrl = job.logoUrl;
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="card w-full bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-2xl">
        <div className="card-body">
          <div className="flex items-center gap-4">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={`${job.title} logo`}
                width={50}
                height={50}
                className="rounded-full"
              />
            ) : (
              <div className="w-[50px] h-[50px] bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm"></div>
            )}
            <div>
              <h2 className="card-title text-lg font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-500">
                {job.orgName} • {job.location}
              </p>
            </div>
          </div>
          <p className="text-gray-600 mt-2 text-sm line-clamp-3">
            {job.description}
          </p>
          <div className="card-actions justify-start mt-4">
            {job.categories.map((category) => (
              <div key={category} className="badge badge-outline">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function JobCardPage() {
  const { data: jobs, error, isLoading } = useGetJobsQuery();

  const handleLogout = async () => {
    if (confirm("Are you sure? ")) {
      await signOut({
        callbackUrl: "/login",
        redirect: true,
      });
    } else return;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading loading-dots loading-xl"></div>
      </div>
    );
  }

  if (error) {
    const errorMessage =
      "data" in error && typeof error.data === "string"
        ? error.data
        : "status" in error
        ? `Request failed with status ${error.status}`
        : "Something went wrong. Please try again.";

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="alert alert-error text-center mb-4 w-full max-w-sm p-5">
          {errorMessage}
        </div>
        <button
          className="btn btn-error w-full max-w-sm"
          onClick={() => {
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold mb-2">Opportunities</h1>
          <label className="select select-bordered w-full max-w-xs">
            <span className="label">Sort</span>
            <select>
              <option value="relevant">Relevant</option>
              <option value="name">Name</option>
              <option value="date_added">Date Added</option>
            </select>
          </label>
          <button
            className="btn btn-outline btn-error my-4"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          Showing {jobs?.length || 0} results
        </p>
        <div className="grid grid-cols-1 gap-6">
          {jobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
}
