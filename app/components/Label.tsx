import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  size?: string;
}

export default function Label(props: Props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}
