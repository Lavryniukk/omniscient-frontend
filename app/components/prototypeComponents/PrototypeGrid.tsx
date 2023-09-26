import Image from "next/image";
import { getDefaultHighWaterMark } from "stream";
let Grid = () => {
  return (
    <div>
      <Image
        className="fixed h-screen w-screen top-0 opacity-10 -z-10"
        src={"/images/bg-image.jpg"}
        width={1200}
        height={1200}
        alt=""
        role="presentation"
      />
      <div className="w-screen h-screen -z-10 fixed top-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  );
};
export default Grid;