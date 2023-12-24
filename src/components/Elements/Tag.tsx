import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "underline-green-500 border-[#68CB5B] text-[#68CB5B]",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
