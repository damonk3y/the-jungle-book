import Logo from "@/components/ui/assets/logo.svg";
import DiscordIcon from "@/components/ui/assets/discord-icon.svg";
import XIcon from "@/components/ui/assets/x-icon.svg";
import InstagramIcon from "@/components/ui/assets/instagram-icon.svg";
import GitHubIcon from "@/components/ui/assets/github-icon.svg";
export const Welcome = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mx-auto max-w-[500px] px-4 py-12">
      <img src={Logo} alt="damonk3ys logo" className="size-80" />
      <h1 className="text-blue-400">da monk3y</h1>
      <p className="mt-4 pr-20 text-gray-400">
        We are principle driven people who do things for fun. We
        build, we game, we learn, we share.
      </p>
      <p className="mt-12 text-right w-full">
        {"-> let people know you exist"}
      </p>
      <p className="text-right w-full">
        {"-> be active in the community"}
      </p>
      <p className="text-right w-full">
        {"-> have fun and respect the jungle"}
      </p>
      <div className="my-12 flex gap-4">
        <a href="https://discord.gg/rHfXrVNe2V" target="_blank">
          <img
            src={DiscordIcon}
            alt="damonk3ys discord"
            className="size-6"
          />
        </a>
        <a href="https://x.com/damonk3y_" target="_blank">
          <img src={XIcon} alt="damonk3ys X" className="size-5" />
        </a>
        <a
          href="https://www.instagram.com/damonk3y.xyz/"
          target="_blank"
        >
          <img
            src={InstagramIcon}
            alt="damonk3ys instagram"
            className="size-5"
          />
        </a>
        <a
          href="https://github.com/damonk3y"
          target="_blank"
        >
          <img
            src={GitHubIcon}
            alt="damonk3ys github"
            className="size-5"
          />
        </a>
      </div>
    </section>
  );
};
