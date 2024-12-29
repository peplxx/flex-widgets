import { SVGProps } from "react";

import { TILE_SIZE } from "@/config/grid";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Position = {
  x: number;
  y: number;
};

export type TilePosition = {
  lg: Position;
  md: Position;
  sm: Position;
};

export type TileSize = {
  width: number;
  height: number;
};

export type WidgetSize = {
  width: number;
  height: number;
};
export function widgetSizeToTileSize(
  widgetSize: WidgetSize,
  factor: number = 1,
): TileSize {
  return {
    width: Math.ceil(widgetSize.width * factor),
    height: Math.ceil(widgetSize.height * factor),
  };
}

export type ScreenPosition = {
  x: number;
  y: number;
};

export type ScreenSize = {
  height: number;
  width: number;
};

export function tileToScreen(
  widgetSize: TileSize,
  factor: number = TILE_SIZE,
): ScreenSize {
  return {
    width: Math.ceil(widgetSize.width * factor),
    height: Math.ceil(widgetSize.height * factor),
  };
}
export type Widget = {
  children?: React.ReactNode;
  className?: string;
  pos: TilePosition;
  size: TileSize;
  tileWidgetGap?: number;
};
