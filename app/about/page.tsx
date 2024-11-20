export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      <div className="mt-5 sm:mx-auto sm:w-full md:max-w-3xl p-5 rounded bg-white">
        <h1 className="mb-4 px-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl">About</h1>

        <h1 className="my-4 px-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl">What?</h1>

        <p className=" my-4  px-4 text-justify">
          Fan Academy is a love letter to the defunct game Hero Academy by <a className="text-decoration-line: underline"href="https://robotentertainment.com/ha-details">Robot Entertainment</a>
        </p>
        <p className=" my-4  px-4 text-justify">
          Hero Academy is a player versus player turn-based tactics game, where players chose a team of heroes and use its units and items to defeat their opponents. Learn more about the game on its <a className="text-decoration-line: underline"href="https://en.wikipedia.org/wiki/Hero_Academy">Wikipedia Page</a>
        </p>

        <h1 className="my-4 px-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl">Why?</h1>

        <p className=" my-4  px-4 text-justify">
          I used to love playing Hero Academy back in the day, no other mobile game has come close to the fun I had with it.
        </p>
        <p className=" my-4  px-4 text-justify">
          I was surprised to see that the game still runs on Steam, but sadly, the servers were shut down a long time ago and the game de-listed from all online stores, making it impossible to obtain or play as intended.
        </p>
        <p className=" my-4  px-4 text-justify">
          I thought it was a pity for such a fun to be completely gone like that, so with the help of my wife we are trying to bring Hero Academy back to life as Fan Academy.
        </p>
        <p className=" my-4  px-4 text-justify">
          We chose the name to emphasize the fact that this is a fan project, with no intention other than to give people the chance to discover (or rediscover) this amazing game.
        </p>

        <h1 className="my-4 px-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl">Who?</h1>

        <p className=" my-4  px-4 text-justify">
          Hey there! I'm <a className= "text-decoration-line: underline"href="https://dan-dh.github.io/">Daniel</a>, a full-stack developer based in Brussels, Belgium. I'm handling the development of the site, including coding the game logic from scratch.
        </p>
        <p className=" my-4  px-4 text-justify">
          Sa is the talented individual that is putting back together the awesome assets from the game. Without her you would be playing as a team of character faces headbutting the opposition.
        </p>

        <h1 className="my-4 px-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl">Disclaimer</h1>

        <p className=" my-4  px-4 text-justify">
          All game images and assets used are property of Robot Entertainment. We do not claim ownership nor do we get any monetary compensation from this project. This is entirely a hobby project made by fans of the game.
        </p>
      </div>

    </div>

  );
}