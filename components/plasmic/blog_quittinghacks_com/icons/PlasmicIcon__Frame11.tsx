// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame11Icon(props: Frame11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.73 2.525c-.325.48-.717.888-1.173 1.223 0 .032.004.083.012.153.008.069.012.12.012.153a6.748 6.748 0 01-1.137 3.729 7.328 7.328 0 01-1.363 1.54c-.526.448-1.158.807-1.895 1.076a6.888 6.888 0 01-2.378.403A6.506 6.506 0 01.19 9.738c.228.016.415.025.562.025A4.69 4.69 0 003.698 8.76a2.279 2.279 0 01-1.375-.47 2.426 2.426 0 01-.85-1.18c.139.033.29.05.453.05.22 0 .428-.033.623-.099a2.34 2.34 0 01-1.357-.819 2.267 2.267 0 01-.538-1.491v-.025c.31.163.664.253 1.064.269a2.307 2.307 0 01-.758-.838A2.321 2.321 0 01.679 3.04c0-.408.101-.807.305-1.198a6.515 6.515 0 002.158 1.754 6.73 6.73 0 002.744.715 2.023 2.023 0 01-.086-.538c0-.652.232-1.208.697-1.668a2.322 2.322 0 011.699-.691c.326 0 .64.065.941.196.302.13.559.313.77.55a4.674 4.674 0 001.504-.575c-.17.554-.517.99-1.039 1.308.497-.065.95-.187 1.357-.367h.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame11Icon;
/* prettier-ignore-end */
