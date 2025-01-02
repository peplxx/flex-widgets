import { SVGProps } from "react";
import { v4 as uuidv4 } from "uuid";

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
export class Widget {
  id: string;
  debugOverlay: boolean;
  position: Position;
  size: { width: number; height: number };
  tileWidgetGap: number;
  className: string;
  isDraggable: boolean;
  content: React.ReactNode;

  constructor(
    position: Position,
    size: { width: number; height: number },
    options?: {
      tileWidgetGap?: number;
      id?: string;
      className?: string;
      debugOverlay?: boolean;
      isDraggable?: boolean;
    },
    content?: React.ReactNode,
  ) {
    this.id = uuidv4().slice(-6);
    this.position = position;
    this.size = size;
    this.tileWidgetGap = options?.tileWidgetGap ?? 5;
    this.className = options?.className ?? "";
    this.debugOverlay = options?.debugOverlay ?? false;
    this.isDraggable = options?.isDraggable ?? true;
    this.content = content ?? "";
  }
}

export type Size = {
  height: number;
  width: number;
};

export type DraggedDelta = {
  id: string;
  over_id?: string;
  delta: { x: number; y: number };
};
