export default function OpenGameComponent() {
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
        <div className="text-xl my-auto">
          VS
        </div>
        <div className="flex gap-x-4 mr-5">
          <button type="submit" className="w-24 md:w-40 rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white bg-fa-blue">Join</button>
        </div>
      </li>
    </ul>
  );
}