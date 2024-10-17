import { cn } from "@/lib/utils";
import React from "react";

const SectionWrapper = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: {
    section?: string;
    innerWrapper?: string;
  };
}) => {
  const { section, innerWrapper } = className ?? {};
  return (
    <section
      className={cn("w-full bg-background grid items-center relative", section)}
    >
      <div
        className={cn("wrapper flex gap-16 flex-col md:flex-row", innerWrapper)}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
