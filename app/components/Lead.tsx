import React from "react";
import Image from "../components/Image"
import classNames from "classnames";
import SiteNav from "~/components/SiteNav";
import Title from "~/components/Title";

interface LinkRef {
  path: string;
  title: string | JSX.Element;
}

interface Props {
  className?: string;
  avatar?: boolean;
  title?: string;
  left?: LinkRef;
  right?: LinkRef;
}

const gravatarSrc =
  "https://www.gravatar.com/avatar/83b4095979413f8886a5197b8b692bdf?s=400&r=pg";

const Lead = ({ className, title, avatar = false, left, right }: Props) => (
  <div className={classNames("Lead", className)}>
    <div className="center">
      <div className="header">Brian Lee</div>
      {title && <Title>{title}</Title>}
      {avatar && (
        <Image
          src={gravatarSrc}
          className="image"
          alt="Headshot"
        />
      )}
    </div>
    {left && (
      <SiteNav className="left" path={left.path} title={left.title} />
    )}
    {right && (
      <SiteNav className="right" path={right.path} title={right.title} />
    )}
  </div>
);

Lead.Title = Title

export default Lead;
