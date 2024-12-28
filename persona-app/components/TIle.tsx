import {TILE_SIZE} from "@/config/grid";
export default function Tile({
  size = { width: 1, height: 1 },
  className,
}: {
  size?: { width: number; height: number };
  className?: string;
}) {
  return (
    <div
     className={className}
      style={{
        width: `${size.width * TILE_SIZE}px`,
        height: `${size.height * TILE_SIZE}px`,
      }}
    />
  );
}
