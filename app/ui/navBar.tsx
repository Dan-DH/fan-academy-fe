import { useState } from "react";

export default function NavBar() {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  const [siteMenuOpen, setSiteMenuOpen] = useState(false);

  const toggleSiteMenu = () => {
    setSiteMenuOpen((prev) => !prev);
  };

  return(
    <div>
      <nav className="bg-white">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu */}
              <button type="button"  onClick={toggleSiteMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-black" aria-controls="mobile-menu" aria-expanded="false">
                {/* Icon when menu is closed. */}
                <svg className={`${!siteMenuOpen ? "block" : "hidden"} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* Icon when menu is open. */}
                <svg className={`${siteMenuOpen ? "block" : "hidden"} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a href="/" className="rounded-md bg-fa-blue px-3 py-2 text-lg text-white" aria-current="page">Home</a>
                  <a href="#" className="rounded-md px-3 py-2 text-lg text-black hover:bg-blue-200">Games</a>
                  <a href="/about" className="rounded-md px-3 py-2 text-lg text-black hover:bg-blue-200">About</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button type="button" onClick={toggleProfileMenu} className="relative flex rounded-full text-sm ring-2 ring-black ring-offset-2" id="user-menu-button">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img className="size-12 rounded-full scale-x-[-1]" src="/profilePics/Impaler_v2-hd.jpg" alt=""/>
                  </button>
                </div>

                {/*Dropdown menu, show/hide based on menu state. */ }
                <div className={`${profileMenuOpen ? "absolute" : "hidden"} right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                  {/* Active: "bg-gray-100 outline-none", Not Active: "" */}
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className="relative">
          <div className={`${siteMenuOpen ? "absolute" : "hidden"} sm:hidden left-0 top-0 z-10 w-full bg-white`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
              <a href="#" className="block rounded-md  px-3 py-2 text-base font-medium text-black hover:bg-blue-400">Games</a>
              <a href="/about" className="block rounded-md  px-3 py-2 text-base font-medium text-black hover:bg-blue-400">About</a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}