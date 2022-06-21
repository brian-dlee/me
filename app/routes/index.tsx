import * as React from "react";
import { LinksFunction } from "@remix-run/deno";
import InfoCard from "../components/InfoCard";
import Lead from "../components/Lead";
import globalCss from "~/styles/global.css";
import homeCss from "~/styles/home.css";
import SocialMediaList from "~/components/SocialMediaList";
import Container from "~/components/Container";

export const links: LinksFunction = () => [
  { href: globalCss, rel: "stylesheet" },
  { href: homeCss, rel: "stylesheet" },
];

export default function Index() {
  return (
    <Container className="Main Home">
      <Lead
        avatar
        left={{ path: "/career", title: "Career" }}
        right={{ path: "/projects", title: "Projects" }}
      />
      <SocialMediaList />
      <InfoCard />
    </Container>
  );
}
