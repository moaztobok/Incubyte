import React, { ReactNode } from "react";

const List = ({ children }: { children: ReactNode }) => {
  return <ul className="flex flex-col gap-2">{children}</ul>;
};

export default List;
