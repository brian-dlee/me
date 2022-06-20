import type { MetaFunction } from "@remix-run/deno";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import * as React from "react";
import Container from "~/components/Container";
import Icon from "~/components/Icon";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Container className="App-footer">
          <div className="App-footer-powered-by">
            <a href="https://deno.com/deploy">
              <img alt="Deno" src="https://dash.deno.com/assets/logo.svg" />
              <span>Deno Deploy</span>
            </a>
            <a href="https://remix.run/">
              <img alt="Remix" src="/assets/images/remix-dark-logo.png" />
              <span>Remix</span>
            </a>
          </div>
        </Container>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
}
