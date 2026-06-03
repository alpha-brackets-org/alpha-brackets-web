import Header from "@/components/sections/blog/BlogGridHeader";
import Blogs from "@/components/sections/blog/Blogs";
import { getBlogs } from "@/lib/cms-client";

export const metadata = {
  title: "Alpha Brackets - Blogs",
};

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <>
      <Header />
      <Blogs blogs={blogs} />
    </>
  );
}
