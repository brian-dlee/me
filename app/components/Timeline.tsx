import React from "react";
import { Link } from "@remix-run/react";
import classNames from "classnames";
import Icon from "~/components/Icon";
import { formatMonthRange } from "~/utils/date";
import timelineCss from "./Timeline.css";

interface Entry {
  start?: Date;
  end?: Date;
  external?: string;
  text?: string;
  path?: string;
  title: string | JSX.Element;
  icon?: string;
}

interface Props {
  className?: string;
  entries: Entry[];
}

export const css = [timelineCss];

export default function Timeline({ className, entries }: Props): JSX.Element {
  return (
    <div className={classNames("Timeline", className)}>
      {entries.map(({ start, end, external, text, path, title, icon }, i) => (
        <React.Fragment key={i}>
          <div className="entry">
            <div className="headline">
              <div className="title">
                {icon && <Icon name={icon} />}
                {path
                  ? <Link prefetch="intent" to={path}>{title}</Link>
                  : <span>{title}</span>}
              </div>
              <div className="date">{formatMonthRange(start, end)}</div>
            </div>
            {external && (
              <div className="external">
                <a rel="noreferrer" target="_blank" href={external}>
                  {external}
                </a>
              </div>
            )}
            {text && <div className="summary">{text}</div>}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
