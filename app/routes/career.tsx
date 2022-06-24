import * as React from "react";
import { LinksFunction } from "@remix-run/deno";
import Container from "../components/Container";
import globalCss from "~/styles/global.css";
import careerCss from "~/styles/career.css";
import Icon from "~/components/Icon";
import Timeline, { css } from "~/components/Timeline";
import Lead from "~/components/Lead";

export const links: LinksFunction = () => [
  { href: globalCss, rel: "stylesheet" },
  { href: careerCss, rel: "stylesheet" },
  ...css.map((href) => ({ href, rel: "stylesheet" })),
];

export default function Career() {
  return (
    <Container className="Main Career">
      <Lead
        left={{
          path: "/",
          title: (
            <>
              <Icon name="chevron-back" />
              <span>Home</span>
            </>
          ),
        }}
        right={{ path: "/open-source", title: "Open Source" }}
      />
      <Lead.Title>Career</Lead.Title>
      <Timeline
        entries={[
          {
            title: "Bachelors of Science for Computer Science at UNLV",
            text: "C, C++, Python, Java, Minor in Mathematics",
            icon: "school-outline",
            end: new Date("2013-12-02"),
          },
          {
            title: "Lead Developer at Orion Network Solutions",
            text:
              "PHP, Javascript, Python, Perl, C++: GeoSpatial/Meteorological data processing and consumer applications for the National Weather Service and NOAA",
            icon: "business-outline",
            start: new Date("2012-02-02"),
            end: new Date("2017-11-02"),
          },
          {
            title: "Developed Cargo for Nellis Auction",
            text:
              "React and Firebase, PWA: Introduce automation for processing physical items in a warehouse via an accessible web application",
            icon: "construct-outline",
            start: new Date("2017-11-02"),
            end: new Date("2018-04-02"),
          },
          {
            title: "Director of Engineering at A.I. Foundation",
            text:
              "Scala, C#, Unity, Swift, GoLang, Python, AWS: Train and integrate AI systems with realtime Audio/Video streaming at scale",
            icon: "business-outline",
            start: new Date("2018-02-02"),
            end: new Date("2021-05-02"),
          },
          {
            title: "V.P. of Engineering at Nellis Auction",
            text:
              "Typescript, Python, GoLang, GCP: Elevate business operations and design scalable, distributable e-commerce system from the ground up to meet a growing consumer demand and volume increase",
            icon: "business-outline",
            start: new Date("2021-05-02"),
          },
          {
            title: "Engineering Technical Advisor for Reality Defender",
            text:
              "Typescript, Python, Pulumi (IAC), AWS: Design a self-healing, auto-scaling network to run a variety of AI models to process extreme scales of digital media and determine authenticity",
            icon: "construct-outline",
            start: new Date("2021-10-02"),
          },
        ]}
      />
    </Container>
  );
}
