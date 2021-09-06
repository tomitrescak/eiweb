// server

declare module "express";

declare module "body-parser";

declare module "compression";

declare module "connect-history-api-fallback";

declare module "cors";

// client

declare module "graphql-tag";

declare module "react-dom";

declare module "react-alert";

declare module "react-alert-template-basic";

declare module "marked";

declare module "classnames";

declare module "rc-upload";

declare module "decompress-zip";

declare module "shortid";

declare module "lodash";

declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/styles/hljs";

interface AppWindow extends Window {
  __APOLLO_STATE__: any;
}
