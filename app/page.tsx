import JobCard from "./components/JobCard";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }
  console.log("Session:", session);
  return <JobCard />;
}

export default page;
