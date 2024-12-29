import useBreakpoint from "./breakpoing";
import TileElement from "./TileElement";

import { Position, TilePosition, TileSize, tileToScreen } from "@/types";

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
    <TileElement
      className={`absolute flex justify-center items-center ${className}`}
      position={position}
      size={tileToScreen(size)}
    >
      {children}
    </TileElement>
  );
}
