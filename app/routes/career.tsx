import * as React from "react";
import { LinksFunction } from "@remix-run/deno";
import Container from "../components/Container";
import globalCss from "~/styles/global.css"
import careerCss from "~/styles/career.css"
import Icon from "~/components/Icon";
import Timeline from "~/components/Timeline";
import Profile from "~/components/Profile";

export const links: LinksFunction = () => [
  { href: globalCss, rel: "stylesheet" },
  { href: careerCss, rel: "stylesheet" },
]

export default function Career() {
  return (
    <Container className="Career">
      <Profile title="Career" />
      <div className="AppMenu MenuLeft">
        <a href="/"><Icon name="chevron-back" /><span>Home</span></a>
      </div>
      <div className="AppMenu MenuRight">
        <a href="/projects"><span>Projects</span></a>
      </div>
      <Timeline className="App-body-timeline"
        entries={[
          {
            title: "Bachelors of Science for Computer Science at UNLV",
            text: "Minor in Mathematics",
            icon: "school-outline",
            path: "/edu/undergrad",
            end: new Date("2013-12-02")
          },
          {
            title: "Lead Developer at Orion Network Solutions",
            text: "PHP, Javascript, Python, Perl, C++, GeoSpatial/Meteorological data processing",
            icon: "business-outline",
            path: "/employment/orion-network-solutions",
            start: new Date("2012-02-02"),
            end: new Date("2017-11-02")
          },
          {
            title: "Developed Cargo for Nellis Auction",
            text: "React and Firebase, PWA, Inventory processing software",
            icon: "construct-outline",
            path: "/projects/cargo",
            start: new Date("2017-11-02"),
            end: new Date("2018-04-02")
          },
          {
            title: "Director of Engineering at A.I. Foundation",
            text: "Scala, C#, Unity, Swift, GoLang, Python, Train and integrate AI systems with realtime Audio/Video streaming at scale in AWS",
            icon: "business-outline",
            path: "/employment/ai-foundation",
            start: new Date("2018-02-02"),
            end: new Date("2021-05-02")
          },
          {
            title: "V.P. of Engineering at Nellis Auction",
            text: "Typescript, Python, GoLang, Elevate business operations and design scalable, distributable systems from the ground up to meet a growing consumer demand and volume increase in GCP.",
            icon: "business-outline",
            path: "/employment/nellis-auction",
            start: new Date("2021-05-02")
          },
          {
            title: "Engineering Technical Advisor for Reality Defender",
            text: "Typescript, Python, Pulumi (IAC), Design a self-healing, auto-scaling network to run a variety of AI models to process extreme scales of digital media and determine authenticity",
            icon: "construct-outline",
            path: "/projects/reality-defender",
            start: new Date("2021-10-02")
          },
        ]}
      />
    </Container>
  );
}
