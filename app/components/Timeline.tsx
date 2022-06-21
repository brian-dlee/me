import React from "react";
import { Link } from "@remix-run/react"
import classNames from "classnames";
import moment from "moment"
import Icon from "~/components/Icon";

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

const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000

function formatDate(date: Date): string {
  return moment(date).format("MMM YYYY")
}

function formatDateLabel(start?: Date, end?: Date): string {
  if (start && end) {
    return `${formatDate(start)} to ${formatDate(end)}`
  } else if (start) {
    return `${formatDate(start)} to present`
  } else if (end) {
    return formatDate(end)
  } else {
    return ""
  }
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
              <div className="date">{formatDateLabel(start, end)}</div>
            </div>
            {text && (
              <div className="summary">{text}</div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
