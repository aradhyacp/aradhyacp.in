"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MacOSCardProps {
  bodyClassName?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  title?: string;
}

export default function MacOSCard({
  title,
  children,
  className,
  headerClassName,
  bodyClassName,
}: MacOSCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-2xl",
        "backdrop-blur-xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-white/10 border-b bg-black/40 px-4 py-3",
          headerClassName
        )}
      >
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        {title && (
          <div className="ml-3 font-medium text-white/50 text-xs">{title}</div>
        )}
      </div>
      <div className={cn("p-6", bodyClassName)}>{children}</div>
    </div>
  );
}
