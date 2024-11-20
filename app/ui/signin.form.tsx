import { useRouter } from "next/navigation";
import { useState } from "react";

// FIXME: props type
export default function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // TODO: add error message state and component for when the login fails

  const router = useRouter();

  const handleSubmit = async (form: React.FormEvent<HTMLFormElement> ) => {
    form.preventDefault();

    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password
        })
      });

      await response.json();

      if (response.ok) {
        // add redirect here to main page
        setUsername('');
        setPassword('');
        router.push('/about'); // FIXME: possible null
        // console.log('Login success');
        // console.log(data);
      } else {
        setPassword('');
        router.push('/users/sign-in');
        // console.log('Login error');
        // console.log(data);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return(
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="sm:w-full md:w-full mx-auto h-auto w-auto" src="/ha_logo.png" alt="Hero Academy logo"/>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm p-5 rounded bg-white">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight">Sign in to your account</h2>
        <form onSubmit={handleSubmit} className="mt-5 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium">Username</label>
            <div className="mt-2">
              <input id="email" name="email" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  sm:text-sm/6"/>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-orange-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  sm:text-sm/6"/>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold shadow-sm text-white bg-fa-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6">
          Don't have an account yet?&nbsp;
          <a href="#" className="font-semibold text-orange-500">Create one</a>
        </p>
      </div>
    </div> );
}
