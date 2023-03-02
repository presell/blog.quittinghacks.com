// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrameIcon(props: FrameIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 33"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.582 10.94h-5.914V7.31a1.82 1.82 0 011.827-1.827h3.63V0h-4.544a7.31 7.31 0 00-7.31 7.31v3.63H7.615v5.484h3.656v16.424h6.397V16.424h4.544l1.37-5.483z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
