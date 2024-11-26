export default function GameListComponent() {
  return(
    <ul role="list" className="divide-y divide-gray-100 text-sm bg-white md:max-w-screen-sm max-w-xs m-5 rounded-md">
      <li className="flex justify-between py-5">
        <div className="flex gap-x-4 ml-2">
          <img className="size-12 flex-none rounded-full bg-gray-50" src="/profilePics/Archer_v1-hd.jpg" alt="profile picture"/>
          <div className="flex-auto max-w-16 truncate">
            <p className="font-bold text-gray-900">ssikdjskjskjdskdjskjTestUser1</p>
            <p className="mt-1 text-gray-500">Council</p>
          </div>
        </div>
        <div className="text-xl m-auto bg-gray-600 text-white px-1">
          <p>VS</p>
        </div>
        <div className="flex gap-x-4 mr-2">
          <div className="flex-auto max-w-16 truncate">
            <p className="font-bold text-gray-900">TestUser1</p>
            <p className="mt-1 text-gray-500">Council</p>
          </div>
          <img className="size-12 flex-none rounded-full bg-gray-50 scale-x-[-1]" src="/profilePics/Archer_v1-hd.jpg" alt="profile picture"/>
        </div>
      </li>
    </ul>
  );
}