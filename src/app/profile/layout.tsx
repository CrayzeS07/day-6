import React from "react";

const Userlayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>user</h1>
      {children}
    </div>
  );
};
export default Userlayout;
