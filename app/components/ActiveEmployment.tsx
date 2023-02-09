import React from "react";
import Icon from "./Icon";

interface Item {
  icon: string;
  url: string;
  title: string;
  org: string;
}

const items: Item[] = [
  {
    icon: "business-outline",
    url: "https://nellisauction.com",
    title: "VP of Engineering",
    org: "Nellis Auction",
  },
  {
    icon: "flash-outline",
    url: "https://realitydefender.com",
    title: "Technical Advisor",
    org: "Reality Defender",
  },
];

export default function ActiveEmployment(): JSX.Element {
  return (
    <ul className="ActiveEmployment">
      {items.map(({ url, title, org, icon }, i) => (
        <React.Fragment key={i}>
          <li className="ActiveEmployment-entry">
            <Icon name={icon} />
            <div className="label">
              <a
                className="org"
                href={url}
                rel="noreferrer"
                target="_blank"
              >
                [{title}] {org}
              </a>
            </div>
          </li>
          {i < items.length - 1 && (
            <li key={i} className="ActiveEmployment-entry">
              <Icon className="separator" name={"add"} />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
