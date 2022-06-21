import React from "react";

export default function Title({ children }: { children: string }): JSX.Element {
  return (
    <div className="Title">
      <h1 style={{ display: "none" }}>
        {children ? `Brian Lee - ${children}` : "Brian Lee"}
      </h1>
      {children && <h2 className="main">{children}</h2>}
    </div>
  );
}
