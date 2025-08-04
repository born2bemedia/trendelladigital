'use client';

export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="w-max shrink-0 rounded-lg bg-[rgba(225,223,246,0.40)] p-2 text-lg font-medium text-[#8779F7]">
    {children}
  </span>
);
