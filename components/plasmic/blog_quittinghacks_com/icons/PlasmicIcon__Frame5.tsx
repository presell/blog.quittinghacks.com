// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5Icon(props: Frame5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 19"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.25 3.42v3.11h5.81V3.12A2.91 2.91 0 008.14.25a2.88 2.88 0 00-2.89 2.87v.3z"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"50"}
      ></path>

      <path
        d={
          "M16.06 8.73V6.25H.25v3.29c0 4.31 3.65 7.8 7.96 7.8 4.3 0 7.84-3.49 7.84-7.8l.01-.81z"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"50"}
      ></path>
    </svg>
  );
}

export default Frame5Icon;
/* prettier-ignore-end */
