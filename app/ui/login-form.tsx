// FIXME: props type
export default function LoginForm() {
  return(
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="sm:w-full md:w-full mx-auto h-auto w-auto" src="/ha_logo.png" alt="Hero Academy logo"/>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm p-5 rounded bg-gray-700 bg-opacity-60">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        <form className="mt-5 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-white">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  sm:text-sm/6"/>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-white">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-orange-500 hover:text-yellow-400">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  sm:text-sm/6"/>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm bg-orange-500 hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-white">
          Don't have an account yet?&nbsp;
          <a href="#" className="font-semibold text-orange-500 hover:text-yellow-400">Create one</a>
        </p>
      </div>
    </div> );
  // return (
  //   <form onSubmit={onSubmitFunc} classNameName="space-y-3">
  //     <div classNameName="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
  //       <h1 classNameName={`mb-3 text-2xl`}>
  //         Please log in to continue.
  //       </h1>
  //       <div classNameName="w-full">
  //         <div>
  //           <label
  //             classNameName="mb-3 mt-5 block text-xs font-medium text-gray-900"
  //             htmlFor="email"
  //           >
  //             Email
  //           </label>
  //           <div classNameName="relative">
  //             <input
  //               classNameName="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
  //               id="email"
  //               type="email"
  //               name="email"
  //               placeholder="Enter your email address"
  //               required
  //             />
  //             <AtSymbolIcon classNameName="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
  //           </div>
  //         </div>
  //         <div classNameName="mt-4">
  //           <label
  //             classNameName="mb-3 mt-5 block text-xs font-medium text-gray-900"
  //             htmlFor="password"
  //           >
  //             Password
  //           </label>
  //           <div classNameName="relative">
  //             <input
  //               classNameName="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
  //               id="password"
  //               type="password"
  //               name="password"
  //               placeholder="Enter password"
  //               required
  //               minLength={6}
  //             />
  //             <KeyIcon classNameName="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
  //           </div>
  //         </div>
  //       </div>
  //       <Button classNameName="mt-4 w-full">
  //         Log in <ArrowRightIcon classNameName="ml-auto h-5 w-5 text-gray-50" />
  //       </Button>
  //       <div classNameName="flex h-8 items-end space-x-1">
  //         {/* Add form errors here */}
  //       </div>
  //     </div>
  //   </form>
  // );
}
