import * as React from "react";
import { LinksFunction } from "@remix-run/deno";
import Container from "../components/Container";
import globalCss from "~/styles/global.css"
import projectsCss from "~/styles/projects.css"
import Icon from "~/components/Icon";
import Profile from "~/components/Profile";

export const links: LinksFunction = () => [
  { href: globalCss, rel: "stylesheet" },
  { href: projectsCss, rel: "stylesheet" },
]

export default function Projects() {
  return (
    <Container className="Projects">
      <Profile title="Projects" />
      <div className="AppMenu MenuLeft">
        <a href="/"><Icon name="chevron-back" /><span>Home</span></a>
      </div>
      <div className="AppMenu MenuRight">
        <a href="/career"><span>Career</span></a>
      </div>
    </Container>
  );
}
