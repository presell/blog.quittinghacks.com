// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame4Icon(props: Frame4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.108 17.703H1.892A1.084 1.084 0 01.81 16.622c0-.595.486-1.082 1.08-1.082h16.217c.595 0 1.081.487 1.081 1.082 0 .594-.486 1.08-1.08 1.08zm0-6.216H1.892A1.084 1.084 0 01.81 10.404c0-.594.486-1.08 1.08-1.08h16.217c.595 0 1.081.486 1.081 1.08 0 .595-.486 1.082-1.08 1.082zm0 12.432H1.892A1.084 1.084 0 01.81 22.838c0-.595.486-1.081 1.08-1.081h16.217c.595 0 1.081.486 1.081 1.08 0 .595-.486 1.082-1.08 1.082z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame4Icon;
/* prettier-ignore-end */
