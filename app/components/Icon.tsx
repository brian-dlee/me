import React, { CSSProperties } from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  name: string;
  alt?: string;
  style?: CSSProperties;
  size?: string;
}

const IonIcon = "ion-icon";

export default function Icon(props: Props) {
  return (
    // @ts-ignore The ion-icon element is not official
    <IonIcon
      class={classNames("Icon", props.className)}
      style={props.style}
      name={props.name}
      alt={props.alt}
    />
  );
}
