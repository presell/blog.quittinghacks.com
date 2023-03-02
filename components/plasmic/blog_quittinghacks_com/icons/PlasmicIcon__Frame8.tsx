// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame8Icon(props: Frame8IconProps) {
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
          "M17.596 3.787a7.403 7.403 0 01-1.76 1.834c0 .05.005.126.018.23.012.104.018.18.018.23 0 .953-.141 1.906-.423 2.86a10.124 10.124 0 01-1.283 2.733 10.992 10.992 0 01-2.045 2.31c-.789.673-1.736 1.21-2.842 1.614-1.106.403-2.295.605-3.567.605-1.98 0-3.79-.532-5.428-1.596.343.025.624.037.844.037 1.65 0 3.124-.501 4.42-1.504a3.418 3.418 0 01-2.063-.706 3.64 3.64 0 01-1.275-1.769c.208.05.434.074.679.074.33 0 .642-.05.935-.147a3.509 3.509 0 01-2.036-1.228 3.4 3.4 0 01-.807-2.238V7.09c.464.245.996.38 1.596.403A3.46 3.46 0 011.44 6.236a3.482 3.482 0 01-.422-1.677c0-.612.153-1.211.458-1.798a9.772 9.772 0 003.236 2.632c1.266.642 2.638 1 4.117 1.073a3.034 3.034 0 01-.129-.808c0-.978.349-1.812 1.045-2.503.697-.69 1.546-1.035 2.549-1.035.489 0 .96.097 1.412.293.453.196.838.47 1.156.825a7.01 7.01 0 002.255-.862c-.257.832-.776 1.486-1.559 1.962a7.437 7.437 0 002.036-.55h.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame8Icon;
/* prettier-ignore-end */
