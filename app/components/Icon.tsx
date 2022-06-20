import React, {CSSProperties} from "react"
import classNames from "classnames";

interface Props {
  className?: string;
  name: string;
  style?: CSSProperties;
  size?: string;
}

const IonIcon = "ion-icon"

export default function Icon(props: Props) {
  return (
    // @ts-ignore
    <IonIcon
      class={classNames("Icon", props.className)} style={props.style} name={props.name}
    />
  )
}
