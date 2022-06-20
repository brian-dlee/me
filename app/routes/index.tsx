import * as React from "react";
import { LinksFunction } from "@remix-run/deno";
import InfoCard from "../components/InfoCard";
import Profile from "../components/Profile";
import globalCss from "~/styles/global.css"
import homeCss from "~/styles/home.css"
import SocialMediaList from "~/components/SocialMediaList";
import Container from "~/components/Container";

export const links: LinksFunction = () => [
  { href: globalCss, rel: "stylesheet" },
  { href: homeCss, rel: "stylesheet" },
]

export default function Index() {
  return (
    <Container className="Home">
      <Profile avatar />
      <div className="AppMenu MenuLeft">
        <a href="/career">Career</a>
      </div>
      <div className="AppMenu MenuRight">
        <a href="/projects">Projects</a>
      </div>
      <SocialMediaList />
      <InfoCard />
    </Container>
  );
}
