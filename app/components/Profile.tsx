import React from "react";
import Image from "../components/Image"
import classNames from "classnames";

interface Props {
  className?: string;
  avatar?: boolean;
  title?: string;
}

const gravatarSrc =
  "https://www.gravatar.com/avatar/83b4095979413f8886a5197b8b692bdf?s=400&r=pg";

const Profile = ({ className, title, avatar = false }: Props) => (
  <span className={classNames("Profile", className)}>
    <h1 style={{ display: "none" }}>{title ? `Brian Lee - ${title}` : "Brian Lee"}</h1>
    <div className="Profile-header">Brian Lee</div>
    {title && <h2 className="Profile-sub-header">{title}</h2>}
    {avatar && (
      <Image
        src={gravatarSrc}
        className="profileImage"
        alt="Headshot"
      />
    )}
  </span>
);

export default Profile;
