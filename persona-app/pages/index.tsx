import Tile from "@/components/TIle";
import GridLayout from "@/layouts/grid";

export default function PlaygroundPage() {
  return (
    <GridLayout className="bg-gray-400 ">
      <Tile
        className="bg-violet-100 text-black"
        pos={{
          lg: { x: 1, y: 0 },
          md: { x: 0, y: 0 },
          sm: { x: 1, y: 0 },
        }}
        size={{ width: 2, height: 2 }}
      >
        Test1
      </Tile>
      <Tile
        className="bg-gray-100 text-black"
        pos={{
          lg: { x: 0, y: 0 },
          md: { x: 0, y: 2 },
          sm: { x: 0, y: 0 },
        }}
        size={{ width: 1, height: 1 }}
      >
        Test2
      </Tile>
      <Tile
        className="bg-green-100 text-black"
        pos={{
          lg: { x: 3, y: 0 },
          md: { x: 2, y: 0 },
          sm: { x: 0, y: 2 },
        }}
        size={{ width: 3, height: 3 }}
      >
        Test3
      </Tile>
    </GridLayout>
  );
}
