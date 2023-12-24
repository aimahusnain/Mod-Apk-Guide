'use client'

import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  const [downloadCount, setDownloadCount] = useState(0);

  const handleDownloadClick = () => {
    // Increase the download count by 1
    setDownloadCount(downloadCount + 1);
  };

  return (
    <div className="mx-14 shadow-lg p-4 rounded-2xl grid grid-cols-2">
      <div>
        <p className="text-xl font-bold">Additional Information:</p>
        <div className="flex gap-5 py-3">
          <div className="flex flex-col">
            <p className="font-bold">Updated</p>
            <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
          </div>

          <div>
            <p className="font-bold">Price</p>
            <ViewCounter slug={blogSlug} />
          </div>

          <div>
            <p className="font-bold">Installs</p>
            <p>{downloadCount}</p> {/* Display the download count */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDownloadClick}
            >
              Download
            </button>
          </div>

          <div>
            <p className="font-bold">Tag</p>
            <Link href={`/categories/${slug(blog.tags[0])}`}>
              #{blog.tags[0]}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-bold text-xl">Good speed and no viruses!</p>
        <p className="py-3">
          On our site you can easily download Cricket League.apk! All without
          registration and send SMS!
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
