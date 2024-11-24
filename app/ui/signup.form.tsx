// FIXME: props type
export default function SignUpForm() {
  return(
    <div className="flex min-h-full flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="sm:w-full md:w-full mx-auto h-auto w-auto" src="/ha_logo.png" alt="Hero Academy logo"/>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm p-5 mx-5 rounded bg-white">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight">Create your account</h2>
        <form className="mt-5 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  sm:text-sm/6"/>
            </div>
          </div>
          <div>
            <label htmlFor="text" className="block text-sm/6 font-medium">Username</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  sm:text-sm/6"/>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium">Password</label>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  sm:text-sm/6"/>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium">Confirm password</label>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  sm:text-sm/6"/>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold shadow-sm text-white bg-fa-blue hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6">
          Already have an account?&nbsp;
          <a href="#" className="font-semibold text-orange-500 hover:text-yellow-400">Sign in</a>
        </p>
      </div>
    </div> );
}
