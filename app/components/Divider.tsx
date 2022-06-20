import React, {ReactNode} from "react"

interface Props {
  children?: ReactNode;
  horizontal?: boolean;
}

export default function Divider(props: Props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
