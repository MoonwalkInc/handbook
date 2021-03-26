import React from "react";
import MDXProvider from "../components/MDXProvider";
import "../styles.css";

export default ({ Component, pageProps }) => (
  <MDXProvider>
    <Component {...pageProps} />
  </MDXProvider>
);
