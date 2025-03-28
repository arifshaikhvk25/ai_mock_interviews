import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/"); // home page
  return (
    <div className="auth-layout">
      AuthLayout both
      {children}
    </div>
  );
};

export default AuthLayout;
