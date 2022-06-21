import { Link, LinkProps } from "@remix-run/react";
import React from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  path: LinkProps["to"];
  title: string | JSX.Element;
}

export default function SiteNav({ className, path, title }: Props) {
  return (
    <div className={classNames("SiteNav", className)}>
      <Link prefetch={"intent"} to={path}>{title}</Link>
    </div>
  )
}