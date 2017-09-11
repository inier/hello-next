import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/useRouter">
            <a>useRouter</a>
          </Link>
        </li>
      </ul>
    </nav>
    <hr />
    <h1>Hi. I'm mobile-ready!</h1>
  </div>
);
