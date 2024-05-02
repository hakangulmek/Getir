import React from "react";

function category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col  gap-y-2 items-center p-4
       transition hover:bg-purple-100 rounded-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-lg border border-gray-200 border-dashed transition hover: bg-purple-950"
      />
      <span className="text-sm font-semibold text-gray-700 tracking-tight">
        {title}
      </span>
    </a>
  );
}

export default category;
