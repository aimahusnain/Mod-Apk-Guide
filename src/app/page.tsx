// pages/index.js

import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  const maxFeaturedBlogs = 4;
  const featuredBlogs = allBlogs.filter((blog) => blog.jfkFeatured === true).slice(0, maxFeaturedBlogs);

  return (
    <main className="px-6 flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} featuredBlogs={featuredBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
