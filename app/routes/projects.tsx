import * as React from "react";
import { LinksFunction } from "@remix-run/deno";
import Container from "../components/Container";
import globalCss from "~/styles/global.css"
import projectsCss from "~/styles/projects.css"
import Icon from "~/components/Icon";
import Lead from "~/components/Lead";

export const links: LinksFunction = () => [
  { href: globalCss, rel: "stylesheet" },
  { href: projectsCss, rel: "stylesheet" },
]

export default function Projects() {
  return (
    <Container className="Main Projects">
      <Lead
        title="Projects"
        left={{ path: "/", title: <><Icon name="chevron-back" /><span>Home</span></> }}
        right={{ path: "/career", title: "Career" }}
      />
    </Container>
  );
}
