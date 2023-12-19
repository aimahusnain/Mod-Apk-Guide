'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { allBlogs } from '@/.contentlayer/generated';
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree';

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.prefetch;

  const [searchTerm, setSearchTerm] = useState(q || ''); // Initialize the search term with the query parameter

  const filteredBlogs = allBlogs.filter((blog) => {
    const normalizedTitle = blog.title.toLowerCase();
    const normalizedQuery = searchTerm.toLowerCase();
    return normalizedTitle.includes(normalizedQuery);
  });

  return (
    <div className="mt-12">
      <div className="relative">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full py-2 px-4 rounded-md border focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => router.push(`/search?q=${encodeURIComponent(searchTerm)}`)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Search
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 px-5 sm:px-10 md:px-24 sxl:px-32">
        {filteredBlogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
