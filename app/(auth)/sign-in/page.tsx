import AuthForm from "@/components/AuthForm";
import React from "react";

const page = () => {
  return (
    <div>
      {/* SIGN IN  */}
      <AuthForm type={"sign-in"} />
    </div>
  );
};

export default page;
