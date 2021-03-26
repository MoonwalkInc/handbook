import React from "react";
import { MDXProvider } from "@mdx-js/react";

const mdComponents = {
  h1: (props) => <h1 className="title" {...props} />,
};

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);
