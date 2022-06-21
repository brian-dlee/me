import * as React from "react";
import {MetaFunction} from "@remix-run/deno";
import Title from "~/components/Title";

export const meta: MetaFunction = () => ({
  title: "Brian Lee - Undergrad at UNLV"
})

export default function Details() {
  return (
    <>
      <Title>B.S. in Computer Science, UNLV</Title>
    </>
  );
}
