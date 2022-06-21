import * as React from "react";
import { LinksFunction } from "@remix-run/deno";
import { Outlet } from "@remix-run/react";
import Lead from "../components/Lead";
import globalCss from "~/styles/global.css";
import homeCss from "~/styles/home.css";
import Container from "~/components/Container";
import Icon from "~/components/Icon";

export const links: LinksFunction = () => [
  { href: globalCss, rel: "stylesheet" },
  { href: homeCss, rel: "stylesheet" },
];

export default function Details() {
  return (
    <Container className="Main">
      <Lead
        left={{ path: "/career", title: "Career" }}
        right={{ path: "/projects", title: "Projects" }}
      />
      <Outlet />
    </Container>
  );
}
