import Icon from "~/components/Icon";
import HeroPatternsLogo from "~/components/HeroPatternsLogo";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="powered-by">
        <a href="https://deno.com/deploy" rel="noreferrer" target="_blank">
          <img
            alt="Deno"
            src="https://dash.deno.com/assets/logo.svg"
            className="logo"
          />
          <span className="label">Deno Deploy</span>
        </a>
        <span className="separator">|</span>
        <a href="https://remix.run/" rel="noreferrer" target="_blank">
          <img
            alt="Remix"
            src="/assets/images/remix-dark-logo.png"
            className="logo"
          />
          <span className="label">Remix</span>
        </a>
        <span className="separator">|</span>
        <a href="https://ionic.io/ionicons" rel="noreferrer" target="_blank">
          <Icon alt="ionic" name="logo-ionic" className="logo" />
          <span className="label">ionicons</span>
        </a>
        <span className="separator">|</span>
        <a href="https://heropatterns.com/" rel="noreferrer" target="_blank">
          <HeroPatternsLogo className="logo" />
          <span className="label">Hero Patterns</span>
        </a>
      </div>
      <div className="source">
        <a
          href="https://github.com/brian-dlee/me"
          rel="noreferrer"
          target="_blank"
        >
          <Icon className="logo" name="logo-github" />
          <span className="label">https://github.com/brian-dlee/me</span>
        </a>
      </div>
    </footer>
  );
}
