import { ReactNode } from "react";
import { NavBar } from "./_components/NavBar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QPayy - Price Smarter, Sell Bigger",
  description: "",
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <NavBar />
      {children}
    </div>
  );
}
