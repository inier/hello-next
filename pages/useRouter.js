import React from "react";
import Link from "next/link";
import Router from "next/router";

const handler = () =>
  Router.push({
    pathname: "/about",
    query: { name: "Zeit" }
  });

export default () => (
  <div>
    <h1>Use Router:</h1>
    <hr />

    <h2>With Link:</h2>
    Click{" "}
    <Link href="/about">
      about
    </Link>{" "}
    to read more.

    <h2>With URL object:</h2>
    Click{" "}
    <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
      about
    </Link>{" "}
    to read more.

    <h2>Replace instead of push url:</h2>
    Click{" "}
    <Link href="/about" replace>
      about
    </Link>{" "}
    to read more.

    <h2>Using a component that support onClick:</h2>
    Click <span onClick={() => Router.push("/about")}>about</span> to read more.

    <h2>Imperatively:</h2>
    Click <span onClick={handler}>about</span> to read more.

    <h2>Router Events:</h2>
    <ul>
      <li>routeChangeStart(url) - Fires when a route starts to change</li>
      <li>routeChangeComplete(url) - Fires when a route changed completely</li>
      <li>
        routeChangeError(err, url) - Fires when there's an error when changing routes
      </li>
      <li>
        beforeHistoryChange(url) - Fires just before changing the browser's history
      </li>
      <li>
        appUpdated(nextRoute) - Fires when switching pages and there's a new version of the app
      </li>
    </ul>
  </div>
);
