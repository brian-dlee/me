import Icon from "~/components/Icon";
import HeroPatternsLogo from "~/components/HeroPatternsLogo";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="powered-by">
        <a href="https://deno.com/deploy">
          <img alt="Deno" src="https://dash.deno.com/assets/logo.svg" className="logo" />
          <span className="label">Deno Deploy</span>
        </a>
        <span className="separator">|</span>
        <a href="https://remix.run/">
          <img alt="Remix" src="/assets/images/remix-dark-logo.png" className="logo" />
          <span className="label">Remix</span>
        </a>
        <span className="separator">|</span>
        <a href="https://ionic.io/ionicons">
          <Icon alt="ionic" name="logo-ionic" className="logo" />
          <span className="label">ionicons</span>
        </a>
        <span className="separator">|</span>
        <a href="https://heropatterns.com/">
          <HeroPatternsLogo className="logo" />
          <span className="label">Hero Patterns</span>
        </a>
      </div>
    </footer>
  )
}
