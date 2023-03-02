// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame9Icon(props: Frame9IconProps) {
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
          "M8.575 3.978h-2.15v-1.32c0-.369.295-.664.664-.664h1.32V0H6.757a2.658 2.658 0 00-2.659 2.658v1.32H2.77v1.994H4.1v5.973h2.326V5.972h1.652l.498-1.994z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame9Icon;
/* prettier-ignore-end */
