import React, {ReactNode} from "react"

interface Props {
  children?: ReactNode;
  className?: string;
  inverted?: boolean;
  raised?: boolean;
  size?: string;
}

export default function Segment(props: Props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}