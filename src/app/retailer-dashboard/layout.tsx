import RetailerDashboardSidebar from "@/components/retailer-dashboard/sidebar/app";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex md:gap-15 lg:gap-15 w-screen">
      <div>
        <RetailerDashboardSidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
