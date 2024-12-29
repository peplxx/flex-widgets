import Tile from "./Tile";

import { TILE_SIZE } from "@/config/grid";
import { TilePosition, TileSize, widgetSizeToTileSize } from "@/types";

export default function WidgetBase({
  className,
  children,
  pos,
  size,
  tileWidgetGap = 5,
}: {
  children?: React.ReactNode;
  className?: string;
  pos: TilePosition;
  size: TileSize;
  tileWidgetGap?: number;
}) {
  const itemCentered: string = "flex justify-center items-center";
  const tileSize: TileSize = widgetSizeToTileSize(size);

  const style = {
    height: `${tileSize.height * TILE_SIZE - tileWidgetGap * 2}px`,
    width: `${tileSize.width * TILE_SIZE - tileWidgetGap * 2}px`,
  };

  return (
    <Tile pos={pos} size={tileSize}>
      <div
        className={`relative rounded-[1em] ${itemCentered} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Tile>
  );
}
