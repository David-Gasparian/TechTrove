declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}