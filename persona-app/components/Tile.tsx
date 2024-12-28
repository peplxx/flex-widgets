import useBreakpoint from "./breakpoing";

import { Position, TilePosition, TileSize } from "@/types";
import { TILE_SIZE } from "@/config/grid";

export default function Tile({
  size = { width: 1, height: 1 },
  pos,
  className,
  children,
}: {
  size?: TileSize;
  pos: TilePosition;
  className?: string;
  children: React.ReactNode;
}) {
  const breakpoint: keyof typeof pos = useBreakpoint() as keyof typeof pos;
  const position: Position = pos[breakpoint] || {
    x: 0,
    y: 0,
  };

  return (
    <div
      className={`absolute flex justify-center items-center ${className}`}
      style={{
        width: `${size.width * TILE_SIZE}px`,
        height: `${size.height * TILE_SIZE}px`,
        left: `${position.x * 125}px`,
        top: `${position.y * 125}px`,
      }}
    >
      {children}
    </div>
  );
}
