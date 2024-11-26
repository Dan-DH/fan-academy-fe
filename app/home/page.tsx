import GameListComponent from "../ui/gameListComponent";
import ListComponent from "../ui/listComponent";
import OpenGameComponent from "../ui/openGameComponent";
import PostElement from "../ui/post";

export default function HomePage() {
  // State for: online users / your games / games looking for players
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
        <div className="">
          <p>Your games</p>
          <GameListComponent/>
        </div>
        <div>
          <p>Open games</p>
          <OpenGameComponent/>
        </div>
        <div className="">
          <p>Online users</p>
          <ListComponent/>
        </div>
      </div>
      <div className="bg-white text-black mx-5 px-5 md:max-w-lg lg:max-w-3xl md:mx-auto">
        <p>News</p>
        <PostElement/>
      </div>
    </div>
  );
}