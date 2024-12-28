import Tile from "@/components/TIle";
import DefaultLayout from "@/layouts/default";

export default function PlaygroundPage() {
  return (
    <DefaultLayout className="bg-gray-400 ">
        <Tile className="bg-white" size={{width:2, height:2}}/>

    </DefaultLayout>
  );
}
