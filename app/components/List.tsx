import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

interface Props {
  key?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface ListProps extends Props {
  horizontal?: boolean;
  size?: string;
}

function List(props: ListProps): JSX.Element {
  return (
    <div className={classNames("List", props.className)}>
      {props.children}
    </div>
  );
}

interface ItemProps extends Props {
  onClick?: () => void;
}

function Item(props: ItemProps): JSX.Element {
  return (
    <div className={classNames("ListItem", props.className)}>
      {props.children}
    </div>
  );
}

List.Item = Item;

export default List;
