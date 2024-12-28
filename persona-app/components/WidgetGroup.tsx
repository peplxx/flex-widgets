import { TILE_SIZE } from "@/config/grid";
import useBreakpoint from "./breakpoing";
import WidgetBase from "./WidgetBase";

import { ScreenSize, TilePosition, TileSize, tileToScreen, Widget, widgetSizeToTileSize } from "@/types";
import TileElement from "./TileElement";

// Automatically wraps containing widgets
export default function WidgetGroup({
  widgets,
}: {
  widgets: Widget[];
}): JSX.Element {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  const breakpoint: keyof TilePosition = useBreakpoint() as keyof TilePosition;

  // Calculate the overall size of the group by iterating through widgets
  widgets.forEach((widget) => {
    const tileSize = widgetSizeToTileSize(widget.size);

    // Calculate the maximum and minimum X and Y positions

    const position = widget.pos[breakpoint] || { x: 0, y: 0 };

    minX = Math.min(minX, position.x); // leftmost position
    minY = Math.min(minY, position.y); // topmost position
    maxX = Math.max(maxX, position.x + tileSize.width); // rightmost position
    maxY = Math.max(maxY, position.y + tileSize.height); // bottommost position
  });

  // Calculate the total width and height of the group based on min/max positions
  let groupSize: ScreenSize = {
    width: maxX - minX,
    height: maxY - minY,
  };


  console.log(minX, minY, maxX, maxY);
  console.log(groupSize);

  return (
    <TileElement
      className="border-small rounded-lg"
      position={{x: 0, y:0}}
      size={tileToScreen(groupSize)}
    >
      {widgets.map((widget, index) => (
        <WidgetBase key={index} {...widget} />
      ))}
    </TileElement>
  );
}
