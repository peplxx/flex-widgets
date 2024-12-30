import { motion } from "framer-motion";

import Tile from "./Tile";

import { TILE_SIZE } from "@/config/grid";
import { TilePosition, TileSize, widgetSizeToTileSize } from "@/types";

export default function WidgetBase({
  className,
  children,
  pos,
  size,
  style,
  tileWidgetGap = 5,
}: {
  children?: React.ReactNode;
  className?: string;
  pos: TilePosition;
  size: TileSize;
  style?: object;
  tileWidgetGap?: number;
}) {
  const itemCentered: string = "flex justify-center items-center";
  const tileSize: TileSize = widgetSizeToTileSize(size);

  const sizing = {
    height: `${tileSize.height * TILE_SIZE - tileWidgetGap * 2}px`,
    width: `${tileSize.width * TILE_SIZE - tileWidgetGap * 2}px`,
  };

  return (
    <Tile pos={pos} size={tileSize}>
      <motion.div
        className={`relative drop-shadow-xl hover:brightness-105 rounded-[1em] ${itemCentered} ${className}`}
        style={{ ...sizing, ...style }}
      >
        {children}
      </motion.div>
    </Tile>
  );
}
