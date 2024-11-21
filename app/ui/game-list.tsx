export default function GameListComponent() {
  // TODO: add logic and use as based for the diff lists:
  // -users: with active status | last seen datetime
  // -games:both looking for an currently being played
  // -game history
  return(
    <ul role="list" className="divide-y divide-gray-100 text-sm bg-white md:max-w-screen-sm max-w-xs m-5 rounded-md">
      <li className="flex justify-between py-5">
        <div className="flex gap-x-4">
          <img className="size-12 ml-5 flex-none rounded-full bg-gray-50" src="/profilePics/Archer_v1-hd.jpg" alt="profile picture"/>
          <div className="flex-auto">
            <p className="font-bold text-gray-900">TestUser1</p>
            <p className="mt-1 text-gray-500">The Council</p>
          </div>
        </div>
        <div className="flex flex-col items-end pr-5 my-auto">
          <p className="text-gray-500">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
        </div>
      </li>
    </ul>
  );
}