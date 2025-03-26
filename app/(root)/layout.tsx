import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div>Root Layout {children}</div>;
};

export default layout;
