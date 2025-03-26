import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout">
      AuthLayout both
      {children}
    </div>
  );
};

export default AuthLayout;
