import { SVGProps } from "react";

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
