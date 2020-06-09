declare module "*.scss";
declare module "*.svg" {
  import React = require("react");
  export const reactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
