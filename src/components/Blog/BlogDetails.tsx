"use client";

import React from "react";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";
import { Plus, ShieldCheck } from "lucide-react";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="mx-14 shadow-lg p-4 rounded-2xl grid grid-cols-2">
      <div className="flex gap-4">
        <Plus className="text-green-500 h-14 w-14 mt-4" />
        <div className="flex flex-col">
          <p className="text-xl font.bold">Additional Information:</p>
          <div className="flex gap-5 py-3">
            <div className="flex flex-col">
              <p className="font-bold">Updated</p>
              <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
            </div>

            <div>
              <p className="font-bold">Price</p>
              $0
            </div>

            <div>
              <p className="font-bold">Tag</p>
              <Link href={`/categories/${slug(blog.tags[0])}`}>
                #{blog.tags[0]}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <ShieldCheck className="text-green-500 h-20 w-20 mt-2" />
        <div className="flex flex-col">
          <p className="font-bold text-xl">Good speed and no viruses!</p>
          <p className="py-3">
            On our site you can easily download Cricket League.apk! All without
            registration and send SMS!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
