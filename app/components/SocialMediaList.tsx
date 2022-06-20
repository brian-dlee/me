import React from "react";
import List from "./List";
import Icon from "./Icon";

interface Item {
  icon: string;
  url: string;
  text: string;
}

const items: Item[] = [
  {
    icon: "logo-linkedin",
    url: "https://linkedin.com/in/brian-dlee",
    text: "brian-dlee"
  },
  {
    icon: "logo-twitter",
    url: "https://twitter.com/brian_dlee",
    text: "@brian_dlee"
  },
  {
    icon: "logo-github",
    url: "https://github.com/brian-dlee",
    text: "@brian-dlee"
  },
  {
    icon: "logo-gitlab",
    url: "https://gitlab.com/briandlee",
    text: "@briandlee"
  },
  {
    icon: "mail",
    url: "mailto:briandl92391@gmail.com",
    text: "briandl92391@gmail.com"
  }
]

export default function SocialMediaList(): JSX.Element {
  return (
    <List className="SocialMediaList">
      {items.map(({ icon, url, text }, i) => (
        <React.Fragment key={text}>
          <span className="SocialMediaList-entry">
            <a href={url} rel="noreferrer" target="_blank">
              <Icon name={icon} />
              <span>{text}</span>
            </a>
          </span>
          {i < items.length - 1 ? <span className="SocialMediaList-entry separator">·</span> : null}
        </React.Fragment>
      ))}
    </List>
  );
}
