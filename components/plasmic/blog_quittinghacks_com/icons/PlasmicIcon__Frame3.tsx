// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame3Icon(props: Frame3IconProps) {
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
          "M32.26 6.943a13.573 13.573 0 01-3.228 3.363c0 .09.01.23.033.42.022.191.033.331.033.421a18.46 18.46 0 01-.774 5.246 18.557 18.557 0 01-2.353 5.01 20.152 20.152 0 01-3.749 4.235c-1.446 1.233-3.183 2.219-5.21 2.958-2.028.74-4.207 1.109-6.54 1.109-3.63 0-6.948-.975-9.95-2.925.627.045 1.143.067 1.545.067 3.027 0 5.728-.919 8.104-2.757-1.413-.022-2.673-.453-3.782-1.294a6.673 6.673 0 01-2.337-3.244c.381.09.796.136 1.245.136.605 0 1.176-.09 1.714-.27-1.502-.313-2.746-1.063-3.732-2.251a6.235 6.235 0 01-1.48-4.102v-.068c.85.449 1.826.695 2.925.74a6.345 6.345 0 01-2.084-2.304 6.383 6.383 0 01-.774-3.076c0-1.12.28-2.219.84-3.295a17.916 17.916 0 005.933 4.825c2.32 1.177 4.836 1.832 7.547 1.967-.157-.56-.236-1.054-.236-1.48 0-1.793.64-3.323 1.916-4.59 1.277-1.265 2.835-1.898 4.673-1.898.896 0 1.76.18 2.589.538a6.01 6.01 0 012.119 1.513 12.852 12.852 0 004.134-1.581c-.47 1.525-1.423 2.724-2.857 3.597 1.367-.18 2.61-.515 3.732-1.008l.003-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */
