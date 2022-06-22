import React from "react";
import Segment from "./Segment";
import classNames from "classnames";

interface Props {
  className?: string;
}

export default function InfoCard(props: Props) {
  return (
    <div className={classNames("InfoCard", props.className)}>
      <Segment className="content">
        <p>
          I love software development - a field that fuses critical-thinking and
          expression into one with an incredibly vast and active ecosystem. It
          means endless problems to solve and ways to solve them.
        </p>
        <p>
          I have significant and varietal professional experience in the field,
          including: web application development and systems design, GeoSpatial data
          processing, platform native solutions for realtime audio/video streaming,
          production AI model integration and infrastructure, autoscaling
          hardware-restricted applications in cloud environments, and distributing
          systems for high scalability.
        </p>
      </Segment>
    </div>
  );
}
