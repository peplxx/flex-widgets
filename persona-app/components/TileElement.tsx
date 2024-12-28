import { Position, ScreenSize } from "@/types";
import { TILE_SIZE } from "@/config/grid";

export default function TileElement({
  size,
  position,
  className,
  children,
}: {
  size: ScreenSize;
  position: Position;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute flex justify-center items-center ${className}`}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        left: `${position.x * TILE_SIZE}px`,
        top: `${position.y * TILE_SIZE}px`,
      }}
    >
      {children}
    </div>
  );
}
