import React from "react";
import { LinksFunction } from "@remix-run/deno";
import Container from "../components/Container";
import globalCss from "~/styles/global.css";
import projectsCss from "~/styles/projects.css";
import Icon from "~/components/Icon";
import Lead from "~/components/Lead";
import Timeline, { css } from "~/components/Timeline";

export const links: LinksFunction = () => [
  { href: globalCss, rel: "stylesheet" },
  { href: projectsCss, rel: "stylesheet" },
  ...css.map((href) => ({ href, rel: "stylesheet" })),
];

export default function Projects() {
  return (
    <Container className="Main Projects">
      <Lead
        title="Projects"
        left={{
          path: "/",
          title: (
            <>
              <Icon name="chevron-back" />
              <span>Home</span>
            </>
          ),
        }}
        right={{ path: "/career", title: "Career" }}
      />
      <Timeline
        entries={[
          {
            title: (
              <>
                <Icon name="logo-python" /> Allay
              </>
            ),
            external: "https://github.com/brian-dlee/allay",
            text: "A DevOps automation tool",
          },
          {
            title: (
              <>
                <Icon name="logo-python" /> Tractor (or Magnet)
              </>
            ),
            external: "https://github.com/brian-dlee/magnet",
            text: "An SFTP file transmissiong tool",
          },
          {
            title: (
              <>
                <Icon name="logo-javascript" /> Tacto
              </>
            ),
            external: "https://www.npmjs.com/package/tacto",
            text: "Improved APIs for sorting collections in vanilla Javascript",
          },
          {
            title: (
              <>
                <Icon name="logo-javascript" /> Radux
              </>
            ),
            external: "https://www.npmjs.com/package/radux",
            text:
              "A tool to reduce repetitiveness and separation when using Redux for state management",
          },
          {
            title: (
              <>
                <Icon name="logo-react" /> Former Personal Website
              </>
            ),
            external: "https://github.com/brian-dlee/personal-website",
            text: "A React app emulating the look of a terminal",
          },
          {
            title: (
              <>
                <Icon name="desktop" /> Native Plugins + Unity
              </>
            ),
            external:
              "https://github.com/brian-dlee/unity-editor-and-native-plugins",
            text:
              "Unity and native MacOS plugins using C#, Swift, C, and Objective C++",
          },
          {
            title: (
              <>
                <Icon name="hammer" /> Sling
              </>
            ),
            external: "https://github.com/brian-dlee/sling",
            text: "A python package distribution tool written in Rust",
          },
        ]}
      />
    </Container>
  );
}
