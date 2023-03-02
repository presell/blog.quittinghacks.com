// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame6Icon(props: Frame6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.863 5.968H9.637v-1.98c0-.554.443-.997.997-.997h1.98V0h-2.479a3.988 3.988 0 00-3.987 3.988v1.98H4.154v2.99h1.994v8.959h3.489V8.958h2.478l.748-2.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame6Icon;
/* prettier-ignore-end */
