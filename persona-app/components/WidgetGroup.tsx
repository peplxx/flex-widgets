import React from "react";

import useBreakpoint from "./breakpoing";
import WidgetBase from "./WidgetBase";
import TileElement from "./TileElement";

import {
  ScreenSize,
  TilePosition,
  tileToScreen,
  Widget,
  widgetSizeToTileSize,
  Position,
} from "@/types";

// Automatically wraps containing widgets and creates Tile Element
export default function WidgetGroup({
  widgets,
  groupTileContent,
  className,
}: {
  widgets: Widget[];
  groupTileContent?: React.ReactNode;
  className?: string;
}): JSX.Element {
  let minp: Position = { x: Infinity, y: Infinity };
  let maxp: Position = { x: -Infinity, y: -Infinity };

  const breakpoint: keyof TilePosition = useBreakpoint() as keyof TilePosition;

  widgets.forEach((widget) => {
    const tileSize = widgetSizeToTileSize(widget.size);
    const position = widget.pos[breakpoint] || { x: 0, y: 0 };

    minp.x = Math.min(minp.x, position.x);
    minp.y = Math.min(minp.y, position.y);
    maxp.x = Math.max(maxp.x, position.x + tileSize.width);
    maxp.y = Math.max(maxp.y, position.y + tileSize.height);
  });

  let groupSize: ScreenSize = {
    width: maxp.x - minp.x,
    height: maxp.y - minp.y,
  };

  return (
    <div>
      {widgets.map((widget, index) => (
        <WidgetBase key={index} {...widget} />
      ))}
      <TileElement
        className={className}
        position={minp}
        size={tileToScreen(groupSize)}
      >
        {groupTileContent}
      </TileElement>
    </div>
  );
}
