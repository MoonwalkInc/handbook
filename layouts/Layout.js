import React from "react";

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="main">{children}</div>
    </div>
  );
}
