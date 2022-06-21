import React from "react";
import { Link } from "@remix-run/react";
import classNames from "classnames";
import Icon from "~/components/Icon";
import { formatMonthRange } from "~/utils/date";

interface Entry {
  start?: Date;
  end?: Date;
  text?: string;
  path: string;
  title: string;
  icon?: string;
}

interface Props {
  className?: string;
  entries: Entry[];
}

export default function Timeline({ className, entries }: Props): JSX.Element {
  return (
    <div className={classNames("Timeline", className)}>
      {entries.map(({ start, end, text, path, title, icon }, i) => (
        <React.Fragment key={title}>
          <div className="Timeline-entry">
            <div className="headline">
              <div className="title">
                {icon && <Icon name={icon} />}
                <Link prefetch="intent" to={path}>{title}</Link>
              </div>
              <div className="date">{formatMonthRange(start, end)}</div>
            </div>
            {text && <div className="summary">{text}</div>}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
