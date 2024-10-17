"use client";
import React from "react";

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="grid grid-cols-[16px_auto] gap-4 items-center content-center font-semibold">
      <span className="w-2 h-1 bg-primary " />
      <div>{text}</div>
    </div>
  );
};

export default ListItem;
