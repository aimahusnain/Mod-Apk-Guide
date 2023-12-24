"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  const handleDownloadClick = async () => {
    try {
      let { error } = await supabase.rpc("increment", {
        slug_text: slug,
      });

      if (error) {
        console.error("Error incrementing view count inside try block:", error);
      } else {
        // Increment the view count when the download button is clicked.
        setViews(views + 1);
      }
    } catch (error) {
      console.error("An error occurred while incrementing the view count:", error);
    }
  };

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: slug })
          .single()

        if (error) {
          console.error("Error incrementing view count inside try block:", error)
        }

        setViews(data ? data.count : 0)
      } catch (error) {
        console.error("An error occurred while incrementing the view count:", error);
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return (
      <div>
        <span>{views} views</span>
        <span> | <button onClick={handleDownloadClick}>Download</button></span>
      </div>
    );
  } else {
    return null;
  }
};

export default ViewCounter;
