import React, {ReactNode} from "react"
import classNames from "classnames";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Container(props: Props) {
  return (
    <div className={classNames("container", props.className)}>
      {props.children}
    </div>
  )
}