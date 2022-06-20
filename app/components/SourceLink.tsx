import React from "react";
import colors from "../theme/colors";

interface Props {
  key?: string;
  url: string;
}

export default function SourceLink({ url }: Props): JSX.Element {
  return (
    <div className="source-link">
      <code style={{ color: colors.purple }}>
        URL: <a href={url}>{url}</a>
      </code>
    </div>
  );
}
