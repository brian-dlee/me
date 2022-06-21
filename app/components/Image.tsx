import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  alt?: string;
  className?: string;
  size?: string;
  shape?: string;
  centered?: boolean;
  src: string;
}

export default function Image(props: Props): JSX.Element {
  return (
    <div className={classNames("image", props.className)}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}
